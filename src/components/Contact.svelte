<script>
    let applicant = {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      country: '',
      postalCode: ''
    };
  </script>
  
  <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div class="w-full max-w-lg p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <h1 class="text-3xl font-bold mb-6 text-center">Application</h1>
      <p class="text-center mb-6">Please feel free to send us a message and one of our team will be in contact with you shortly.</p>
      <form>
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2">Name of Applicant *</label>
          <div class="flex space-x-2">
            <input
              type="text"
              placeholder="First"
              bind:value={applicant.firstName}
              class="w-1/2 px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last"
              bind:value={applicant.lastName}
              class="w-1/2 px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        </div>
  
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2">Address *</label>
          <input
            type="text"
            placeholder="Please enter the address that is on your photo ID even if that's not where you currently live."
            bind:value={applicant.addressLine1}
            class="w-full px-3 py-2 mb-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Address Line 1"
            bind:value={applicant.addressLine2}
            class="w-full px-3 py-2 mb-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <div class="flex space-x-2 mb-2">
            <input
              type="text"
              placeholder="City"
              bind:value={applicant.city}
              class="w-1/2 px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="State"
              bind:value={applicant.state}
              class="w-1/2 px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <input
            type="text"
            placeholder="Postal Code"
            bind:value={applicant.postalCode}
            class="w-full px-3 py-2 mb-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <select
            bind:value={applicant.country}
            class="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">--- Select country ---</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <!-- Add more countries as needed -->
          </select>
        </div>
  
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-500 rounded text-white font-bold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  