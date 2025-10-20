#!/usr/bin/env python3
"""
Backend API Test Suite for Nikhil Agarwal's Portfolio Contact Form
Tests all contact form endpoints with comprehensive validation
"""

import requests
import json
import os
import sys
from datetime import datetime
import uuid

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading backend URL: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("ERROR: Could not find REACT_APP_BACKEND_URL in frontend/.env")
    sys.exit(1)

API_BASE = f"{BACKEND_URL}/api"

print(f"Testing backend at: {API_BASE}")
print("=" * 80)

class ContactFormTester:
    def __init__(self):
        self.test_results = []
        self.submission_id = None
        
    def log_test(self, test_name, success, details=""):
        """Log test results"""
        status = "✅ PASS" if success else "❌ FAIL"
        self.test_results.append({
            'test': test_name,
            'success': success,
            'details': details
        })
        print(f"{status} {test_name}")
        if details:
            print(f"    Details: {details}")
        print()
    
    def test_post_contact_valid(self):
        """Test POST /api/contact with valid data"""
        test_data = {
            "name": "John Smith",
            "email": "john.smith@example.com",
            "message": "This is a test message for the portfolio contact form. I'm interested in discussing potential opportunities."
        }
        
        try:
            response = requests.post(f"{API_BASE}/contact", json=test_data, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Check response structure
                if (data.get('success') is True and 
                    'message' in data and 
                    'submission_id' in data):
                    
                    self.submission_id = data['submission_id']
                    self.log_test(
                        "POST /api/contact - Valid submission",
                        True,
                        f"Submission ID: {self.submission_id}"
                    )
                    return True
                else:
                    self.log_test(
                        "POST /api/contact - Valid submission",
                        False,
                        f"Invalid response structure: {data}"
                    )
                    return False
            else:
                self.log_test(
                    "POST /api/contact - Valid submission",
                    False,
                    f"Status: {response.status_code}, Response: {response.text}"
                )
                return False
                
        except Exception as e:
            self.log_test(
                "POST /api/contact - Valid submission",
                False,
                f"Request failed: {str(e)}"
            )
            return False
    
    def test_post_contact_missing_fields(self):
        """Test POST /api/contact with missing required fields"""
        test_cases = [
            {"email": "test@example.com", "message": "Missing name field"},
            {"name": "Test User", "message": "Missing email field"},
            {"name": "Test User", "email": "test@example.com"}  # Missing message
        ]
        
        all_passed = True
        for i, test_data in enumerate(test_cases):
            try:
                response = requests.post(f"{API_BASE}/contact", json=test_data, timeout=10)
                
                if response.status_code == 400:
                    self.log_test(
                        f"POST /api/contact - Missing field test {i+1}",
                        True,
                        f"Correctly rejected with 400: {response.json()}"
                    )
                else:
                    self.log_test(
                        f"POST /api/contact - Missing field test {i+1}",
                        False,
                        f"Expected 400, got {response.status_code}: {response.text}"
                    )
                    all_passed = False
                    
            except Exception as e:
                self.log_test(
                    f"POST /api/contact - Missing field test {i+1}",
                    False,
                    f"Request failed: {str(e)}"
                )
                all_passed = False
        
        return all_passed
    
    def test_post_contact_invalid_data(self):
        """Test POST /api/contact with invalid data formats"""
        test_cases = [
            {
                "name": "A",  # Too short (< 2 chars)
                "email": "valid@example.com",
                "message": "This is a valid message that is long enough"
            },
            {
                "name": "Valid Name",
                "email": "invalid-email",  # Invalid email format
                "message": "This is a valid message that is long enough"
            },
            {
                "name": "Valid Name",
                "email": "valid@example.com",
                "message": "Short"  # Too short (< 10 chars)
            }
        ]
        
        all_passed = True
        for i, test_data in enumerate(test_cases):
            try:
                response = requests.post(f"{API_BASE}/contact", json=test_data, timeout=10)
                
                if response.status_code == 400:
                    self.log_test(
                        f"POST /api/contact - Invalid data test {i+1}",
                        True,
                        f"Correctly rejected with 400: {response.json()}"
                    )
                else:
                    self.log_test(
                        f"POST /api/contact - Invalid data test {i+1}",
                        False,
                        f"Expected 400, got {response.status_code}: {response.text}"
                    )
                    all_passed = False
                    
            except Exception as e:
                self.log_test(
                    f"POST /api/contact - Invalid data test {i+1}",
                    False,
                    f"Request failed: {str(e)}"
                )
                all_passed = False
        
        return all_passed
    
    def test_get_all_contacts(self):
        """Test GET /api/contact - Get all submissions"""
        try:
            response = requests.get(f"{API_BASE}/contact", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Check response structure
                if (data.get('success') is True and 
                    'count' in data and 
                    'submissions' in data and
                    isinstance(data['submissions'], list)):
                    
                    self.log_test(
                        "GET /api/contact - Get all submissions",
                        True,
                        f"Found {data['count']} submissions"
                    )
                    return True
                else:
                    self.log_test(
                        "GET /api/contact - Get all submissions",
                        False,
                        f"Invalid response structure: {data}"
                    )
                    return False
            else:
                self.log_test(
                    "GET /api/contact - Get all submissions",
                    False,
                    f"Status: {response.status_code}, Response: {response.text}"
                )
                return False
                
        except Exception as e:
            self.log_test(
                "GET /api/contact - Get all submissions",
                False,
                f"Request failed: {str(e)}"
            )
            return False
    
    def test_get_all_contacts_pagination(self):
        """Test GET /api/contact with pagination parameters"""
        try:
            response = requests.get(f"{API_BASE}/contact?skip=0&limit=10", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if (data.get('success') is True and 
                    'count' in data and 
                    'submissions' in data):
                    
                    self.log_test(
                        "GET /api/contact - Pagination test",
                        True,
                        f"Pagination working, total: {data['count']}"
                    )
                    return True
                else:
                    self.log_test(
                        "GET /api/contact - Pagination test",
                        False,
                        f"Invalid response structure: {data}"
                    )
                    return False
            else:
                self.log_test(
                    "GET /api/contact - Pagination test",
                    False,
                    f"Status: {response.status_code}, Response: {response.text}"
                )
                return False
                
        except Exception as e:
            self.log_test(
                "GET /api/contact - Pagination test",
                False,
                f"Request failed: {str(e)}"
            )
            return False
    
    def test_get_specific_contact(self):
        """Test GET /api/contact/{id} - Get specific submission"""
        if not self.submission_id:
            self.log_test(
                "GET /api/contact/{id} - Get specific submission",
                False,
                "No submission ID available from previous test"
            )
            return False
        
        try:
            response = requests.get(f"{API_BASE}/contact/{self.submission_id}", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Check response structure
                if (data.get('success') is True and 
                    'submission' in data and
                    data['submission'].get('id') == self.submission_id):
                    
                    self.log_test(
                        "GET /api/contact/{id} - Get specific submission",
                        True,
                        f"Retrieved submission: {self.submission_id}"
                    )
                    return True
                else:
                    self.log_test(
                        "GET /api/contact/{id} - Get specific submission",
                        False,
                        f"Invalid response structure: {data}"
                    )
                    return False
            else:
                self.log_test(
                    "GET /api/contact/{id} - Get specific submission",
                    False,
                    f"Status: {response.status_code}, Response: {response.text}"
                )
                return False
                
        except Exception as e:
            self.log_test(
                "GET /api/contact/{id} - Get specific submission",
                False,
                f"Request failed: {str(e)}"
            )
            return False
    
    def test_get_invalid_contact_id(self):
        """Test GET /api/contact/{id} with invalid ID"""
        invalid_id = str(uuid.uuid4())  # Generate a random UUID that doesn't exist
        
        try:
            response = requests.get(f"{API_BASE}/contact/{invalid_id}", timeout=10)
            
            if response.status_code == 404:
                self.log_test(
                    "GET /api/contact/{id} - Invalid ID test",
                    True,
                    f"Correctly returned 404 for invalid ID: {invalid_id}"
                )
                return True
            else:
                self.log_test(
                    "GET /api/contact/{id} - Invalid ID test",
                    False,
                    f"Expected 404, got {response.status_code}: {response.text}"
                )
                return False
                
        except Exception as e:
            self.log_test(
                "GET /api/contact/{id} - Invalid ID test",
                False,
                f"Request failed: {str(e)}"
            )
            return False
    
    def run_all_tests(self):
        """Run all contact form tests"""
        print("Starting Contact Form API Tests")
        print("=" * 80)
        
        # Test valid submission first (needed for other tests)
        self.test_post_contact_valid()
        
        # Test validation
        self.test_post_contact_missing_fields()
        self.test_post_contact_invalid_data()
        
        # Test retrieval endpoints
        self.test_get_all_contacts()
        self.test_get_all_contacts_pagination()
        self.test_get_specific_contact()
        self.test_get_invalid_contact_id()
        
        # Summary
        print("=" * 80)
        print("TEST SUMMARY")
        print("=" * 80)
        
        passed = sum(1 for result in self.test_results if result['success'])
        total = len(self.test_results)
        
        print(f"Total Tests: {total}")
        print(f"Passed: {passed}")
        print(f"Failed: {total - passed}")
        print(f"Success Rate: {(passed/total)*100:.1f}%")
        
        if passed == total:
            print("\n🎉 ALL TESTS PASSED!")
        else:
            print(f"\n⚠️  {total - passed} TESTS FAILED")
            print("\nFailed Tests:")
            for result in self.test_results:
                if not result['success']:
                    print(f"  - {result['test']}: {result['details']}")
        
        return passed == total

if __name__ == "__main__":
    tester = ContactFormTester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)