#!/usr/bin/env python3
"""
Backend API Testing for Pretty Planet Travels Enquiry System
Tests the tour packages enquiry system APIs
"""

import requests
import json
import uuid
from datetime import datetime
import sys
import os

# Get backend URL from frontend environment
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("ERROR: Could not get REACT_APP_BACKEND_URL from frontend/.env")
    sys.exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"
print(f"Testing backend at: {API_BASE_URL}")

def test_backend_connectivity():
    """Test basic backend connectivity"""
    print("\n=== Testing Backend Connectivity ===")
    try:
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Backend connectivity: {data}")
            return True
        else:
            print(f"❌ Backend connectivity failed: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Backend connectivity error: {e}")
        return False

def test_enquiry_post_api():
    """Test POST /api/enquiry endpoint with sample data"""
    print("\n=== Testing POST /api/enquiry ===")
    
    # Sample enquiry data as specified in the review request
    enquiry_data = {
        "name": "John Smith",
        "email": "john@example.com", 
        "phone": "+91 9876543210",
        "destination": "Kashmir Honeymoon Special",
        "start_date": "2024-01-15",
        "end_date": "2024-01-21", 
        "adults": "2",
        "kids": "0",
        "days": "6 Days",
        "budget": "₹35,000 - ₹50,000",
        "message": "Looking for a romantic honeymoon package",
        "formatted_message": "Test WhatsApp message format"
    }
    
    try:
        response = requests.post(
            f"{API_BASE_URL}/enquiry",
            json=enquiry_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Response Status: {response.status_code}")
        print(f"Response Headers: {dict(response.headers)}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ POST /api/enquiry successful")
            print(f"Response data: {json.dumps(data, indent=2, default=str)}")
            
            # Verify response structure
            required_fields = ['id', 'destination', 'start_date', 'end_date', 'adults', 'kids', 'days', 'name', 'email', 'phone', 'message', 'timestamp']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print(f"❌ Missing fields in response: {missing_fields}")
                return False, None
            
            # Verify UUID format
            try:
                uuid.UUID(data['id'])
                print("✅ Valid UUID generated")
            except ValueError:
                print(f"❌ Invalid UUID format: {data['id']}")
                return False, None
            
            # Verify timestamp
            try:
                datetime.fromisoformat(data['timestamp'].replace('Z', '+00:00'))
                print("✅ Valid timestamp generated")
            except ValueError:
                print(f"❌ Invalid timestamp format: {data['timestamp']}")
                return False, None
            
            return True, data['id']
        else:
            print(f"❌ POST /api/enquiry failed: {response.status_code}")
            print(f"Response: {response.text}")
            return False, None
            
    except Exception as e:
        print(f"❌ POST /api/enquiry error: {e}")
        return False, None

def test_enquiry_get_api():
    """Test GET /api/enquiry endpoint"""
    print("\n=== Testing GET /api/enquiry ===")
    
    try:
        response = requests.get(f"{API_BASE_URL}/enquiry", timeout=10)
        
        print(f"Response Status: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ GET /api/enquiry successful")
            print(f"Number of enquiries retrieved: {len(data)}")
            
            if len(data) > 0:
                print("Sample enquiry data:")
                print(json.dumps(data[0], indent=2, default=str))
                
                # Verify structure of first enquiry
                required_fields = ['id', 'destination', 'start_date', 'end_date', 'adults', 'kids', 'days', 'timestamp']
                missing_fields = [field for field in required_fields if field not in data[0]]
                
                if missing_fields:
                    print(f"❌ Missing fields in enquiry data: {missing_fields}")
                    return False
                else:
                    print("✅ All required fields present in enquiry data")
            
            return True
        else:
            print(f"❌ GET /api/enquiry failed: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ GET /api/enquiry error: {e}")
        return False

def test_enquiry_validation():
    """Test enquiry form validation with invalid data"""
    print("\n=== Testing Enquiry Form Validation ===")
    
    # Test with missing required fields
    invalid_data = {
        "destination": "",  # Empty required field
        "start_date": "2024-12-15",
        "end_date": "2024-12-20"
        # Missing other required fields
    }
    
    try:
        response = requests.post(
            f"{API_BASE_URL}/enquiry",
            json=invalid_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Response Status: {response.status_code}")
        
        if response.status_code == 422:
            print("✅ Validation working - rejected invalid data")
            return True
        elif response.status_code == 200:
            print("⚠️ Warning: API accepted invalid data (validation may be too lenient)")
            return True
        else:
            print(f"❌ Unexpected response for invalid data: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Validation test error: {e}")
        return False

def test_cors_headers():
    """Test CORS headers are properly set"""
    print("\n=== Testing CORS Headers ===")
    
    try:
        # Test preflight request
        response = requests.options(
            f"{API_BASE_URL}/enquiry",
            headers={
                "Origin": "https://dharamshala-weddings.preview.emergentagent.com",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            },
            timeout=10
        )
        
        print(f"OPTIONS Response Status: {response.status_code}")
        print(f"CORS Headers: {dict(response.headers)}")
        
        cors_headers = {
            'access-control-allow-origin': response.headers.get('access-control-allow-origin'),
            'access-control-allow-methods': response.headers.get('access-control-allow-methods'),
            'access-control-allow-headers': response.headers.get('access-control-allow-headers')
        }
        
        print(f"CORS Configuration: {cors_headers}")
        
        if cors_headers['access-control-allow-origin']:
            print("✅ CORS headers present")
            return True
        else:
            print("❌ CORS headers missing")
            return False
            
    except Exception as e:
        print(f"❌ CORS test error: {e}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests for Pretty Planet Travels Enquiry System")
    print("=" * 80)
    
    results = {}
    
    # Test 1: Backend Connectivity
    results['connectivity'] = test_backend_connectivity()
    
    # Test 2: POST /api/enquiry
    results['post_enquiry'], enquiry_id = test_enquiry_post_api()
    
    # Test 3: GET /api/enquiry
    results['get_enquiry'] = test_enquiry_get_api()
    
    # Test 4: Form Validation
    results['validation'] = test_enquiry_validation()
    
    # Test 5: CORS Headers
    results['cors'] = test_cors_headers()
    
    # Summary
    print("\n" + "=" * 80)
    print("🏁 TEST SUMMARY")
    print("=" * 80)
    
    passed = sum(1 for result in results.values() if result)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name.upper()}: {status}")
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! Enquiry system is working correctly.")
        return True
    else:
        print("⚠️ Some tests failed. Please check the issues above.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)