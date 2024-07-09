<script>
  import { writable } from 'svelte/store';

  let formData = {
    first: "",
    last: "",
    address: "",
    address_line_2: "",
    city: "",
    state: "",
    country: "",
    pin: "",
    numberWithCountryCode: "",
    email: "",
    gender: "",
    sport: "",
    mlb_team: "",
    mls_team: "",
    nhl_team: "",
    nfl_team: "",
    nba_team: "",
    wnba_team: "",
    paypal_email: "",
    photo_id: null,
    utility_bill: null
  };

  let uploadedFiles = {
    photo_id: null,
    utility_bill: null
  };

  const teamOptions = {
    'MLB': ['Arizona Diamondbacks', 'Atlanta Braves', 'Baltimore Orioles', 'Boston Red Sox', 'Chicago White Sox', 'Chicago Cubs', 'Cincinnati Reds', 'Cleveland Guardians', 'Colorado Rockies', 'Detroit Tigers', 'Houston Astros', 'Kansas City Royals', 'Los Angeles Angels', 'Los Angeles Dodgers', 'Miami Marlins', 'Milwaukee Brewers', 'Minnesota Twins', 'New York Yankees', 'New York Mets', 'Oakland Athletics', 'Philadelphia Phillies', 'Pittsburgh Pirates', 'San Diego Padres', 'San Francisco Giants', 'Seattle Mariners', 'St. Louis Cardinals', 'Tampa Bay Rays', 'Texas Rangers', 'Toronto Blue Jays', 'Washington Nationals'],
    'MLS': ['Atlanta United FC', 'Austin FC', 'CF Montréal', 'Charlotte FC', 'Chicago Fire FC', 'Colorado Rapids', 'Columbus Crew', 'D.C. United', 'FC Cincinnati', 'FC Dallas', 'Houston Dynamo FC', 'Inter Miami CF', 'LA Galaxy', 'Los Angeles FC', 'Minnesota United FC', 'Nashville SC', 'New England Revolution', 'New York City FC', 'New York Red Bulls', 'Orlando City SC', 'Philadelphia Union', 'Portland Timbers', 'Real Salt Lake', 'San Jose Earthquakes', 'Seattle Sounders FC', 'Sporting Kansas City', 'St. Louis City SC', 'Toronto FC', 'Vancouver Whitecaps FC'],
    'NBA': ['Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets', 'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 'Detroit Pistons', 'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'Los Angeles Clippers', 'Los Angeles Lakers', 'Memphis Grizzlies', 'Miami Heat', 'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Orleans Pelicans', 'New York Knicks', 'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia 76ers', 'Phoenix Suns', 'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz', 'Washington Wizards'],
    'NFL': ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Las Vegas Raiders', 'Los Angeles Chargers', 'Los Angeles Rams', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Francisco 49ers', 'Seattle Seahawks', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Commanders'],
    'NHL': ['Anaheim Ducks', 'Arizona Coyotes', 'Boston Bruins', 'Buffalo Sabres', 'Calgary Flames', 'Carolina Hurricanes', 'Chicago Blackhawks', 'Colorado Avalanche', 'Columbus Blue Jackets', 'Dallas Stars', 'Detroit Red Wings', 'Edmonton Oilers', 'Florida Panthers', 'Los Angeles Kings', 'Minnesota Wild', 'Montreal Canadiens', 'Nashville Predators', 'New Jersey Devils', 'New York Islanders', 'New York Rangers', 'Ottawa Senators', 'Philadelphia Flyers', 'Pittsburgh Penguins', 'San Jose Sharks', 'Seattle Kraken', 'St Louis Blues', 'Tampa Bay Lightning', 'Toronto Maple Leafs', 'Vancouver Canucks', 'Vegas Golden Knights', 'Washington Capitals', 'Winnipeg Jets'],
    'WNBA': ['Atlanta Dream', 'Chicago Sky', 'Connecticut Sun', 'Dallas Wings', 'Indiana Fever', 'Las Vegas Aces', 'Los Angeles Sparks', 'Minnesota Lynx', 'New York Liberty', 'Phoenix Mercury', 'Seattle Storm', 'Washington Mystics']
  };

  async function handleFileUpload(event, fieldName) {
    const file = event.target.files[0];
    if (file) {
      formData[fieldName] = file;
      uploadedFiles[fieldName] = file;
    }
  }
  let isSubmitted = false;

  async function handleSubmit(event) {
    event.preventDefault();
    isSubmitted = true;
    const name = formData.first + " " + formData.last;

    const formDataObj = new FormData();
    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }
    formDataObj.append("name", name);

    console.log('Form Data:', formData);

    try {
      const response = await fetch('http://localhost:8000/api/webhook/wp-form', {
        method: 'POST',
        body: formDataObj
      });

      if (response.ok) {
        isSubmitted = true;
      } else {
        console.error('Failed to submit form:', response.statusText);
        alert('Failed to submit form. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again later.');
    }
  }

  function handleReset() {
    isSubmitted = false;
  }
 
  $: teamList = formData.sport ? teamOptions[formData.sport] : [];

  $: selectedTeamField = `${formData.sport.toLowerCase()}_team`;
</script>

<div id="contact" class="bg-[#1E1E1E] text-white min-h-screen flex justify-center items-center">
  <div class="w-full max-w-4xl p-8">
      <h2 class="text-4xl font-bold mb-4 text-center text-[#F5F5F5] font-Montserrat">Application</h2>
      <p class="mb-6 font-hind">Please feel free to send us a message and one of our team will be in contact with you shortly.</p>

      <form class="space-y-6" on:submit={handleSubmit}>
          <!-- Personal Information -->
          <div>
              <h3 class="text-2xl font-semibold mb-4 text-[#F5F5F5] font-montserrat">Personal Information</h3>
              <div class="space-y-4">
                  <div class="flex gap-4">
                    <div class="w-1/2">
                      <label for="first" class="block text-[#F5F5F5] font-hind mb-1 mt-4">First Name {#if formData.first === ''}<span style="color: red;">*</span>{/if}</label>
                      <input type="text" id="first" placeholder="Enter" bind:value={formData.first} class="w-full p-3 bg-[#28282B] border border-[#CACACA] rounded-lg text-[#F5F5F5] font-hind" required/>
                  </div>
                  <div class="w-1/2">
                      <label for="last" class="block text-[#F5F5F5] font-hind mb-1 mt-4">Last Name {#if formData.last=== ''}<span style="color: red;">*</span>{/if}</label>
                      <input type="text" id="last" placeholder="Last Name" bind:value={formData.last} class="w-full p-3 bg-[#28282B] border border-[#CACACA] rounded-lg text-[#F5F5F5] font-hind" required/>
                  </div>
                  </div>
                  <div>
                      <label for="gender" class="block text-[#F5F5F5] font-hind mb-1 mt-4">Gender {#if formData.gender === ''}<span style="color: red;">*</span>{/if}</label>
                      <select id="gender" bind:value={formData.gender} class="w-1/2 p-3 bg-[#28282B] border border-[#CACACA] rounded-lg">
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                      </select>
                  </div>
              </div>
          </div>

          <!-- Contact Information -->
          <div>
              <h3 class="text-2xl font-semibold mb-4 text-[#F5F5F5] font-montserrat">Contact Information</h3>
              <div class="space-y-4">
                  <div class="flex gap-4">
                      <div class="w-1/2">
                          <label for="address1" class="block text-[#F5F5F5] font-hind mb-1 mt-4">Address Line 1 {#if formData.address_line1 === ''}<span style="color: red;">*</span>{/if}</label>
                          <input type="text" id="address1" placeholder="Enter" bind:value={formData.address} class="w-full p-3 bg-[#28282B] border border-[#CACACA] rounded-lg text-[#F5F5F5] font-hind" required/>
                      </div>
                      <div class="w-1/2">
                          <label for="address2" class="block text-[#F5F5F5] font-hind mb-1 mt-4">Address Line 2 {#if formData.address_line2 === ''}<span style="color: red;">*</span>{/if}</label>
                          <input type="text" id="address2" placeholder="Enter" bind:value={formData.address_line_2} class="w-full p-3 bg-[#28282B] border border-[#CACACA] rounded-lg text-[#F5F5F5] font-hind" required/>
                      </div>
                  </div>
                  <div class="flex gap-4">
                      <div class="w-1/2">
                        <label for="state" class="block text-[#F5F5F5] font-hind mb-1 mt-4">State {#if formData.state === ''}<span style="color: red;">*</span>{/if}</label>
                        <input type="text" id="state" placeholder="Enter" bind:value={formData.state} class="w-full p-3 bg-[#28282B] border border-[#CACACA] rounded-lg text-[#F5F5F5] font-hind" required/>
                      </div>
                      <div class="w-1/2">
                          <label for="city" class="block text-[#F5F5F5] font-hind mb-1 mt-4">City {#if formData.city === ''}<span style="color: red;">*</span>{/if}</label>
                          <input type="text" id="city" placeholder="Enter" bind:value={formData.city} class="w-full p-3 bg-[#28282B] border border-[#CACACA] rounded-lg text-[#F5F5F5] font-hind" required/>
                      </div>
                  </div>
                  <div class="flex gap-4">
                      <div class="w-1/2">
                          <label for="country" class="block text-[#F5F5F5] font-hind mb-1 mt-4" >Country {#if formData.country === ''}<span style="color: red;">*</span>{/if}</label>
                          <input type="text" id="country" placeholder="Enter" bind:value={formData.country} class="w-full p-3 bg-[#28282B] border border-[#CACACA] rounded-lg text-[#F5F5F5] font-hind" required />
                      </div>
                      <div class="w-1/2">
                          <label for="postalCode" class="block text-[#F5F5F5] font-hind mb-1 mt-4">Postal Code {#if formData.pin === ''}<span style="color: red;">*</span>{/if}</label>
                          <input type="text" id="postalCode" placeholder="Enter" bind:value={formData.pin} class="w-full p-3 bg-[#28282B] border border-[#CACACA] rounded-lg text-[#F5F5F5] font-hind" required/>
                      </div>
                  </div>
                  <div class="flex gap-4">
                    <div class="w-1/2">
                        <label for="phoneNumber" class="block text-[#F5F5F5]  font-hind mb-1 mt-4">Phone Number {#if formData.numberWithCountryCode === ''}<span style="color: red;">*</span>{/if}</label>
                        <div class="flex border border-[#CACACA] rounded-lg">
                          <select class="p-3 bg-[#28282B]  rounded-l-lg text-[#F5F5F5] font-hind">
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                          </select>
                          <!-- <input type="text" readonly value={countryCode} class="w-1/4 p-2 bg-[#28282B] text-[#F5F5F5] font-hind" /> -->
                          <input type="tel" id="phone" placeholder="Enter" bind:value={formData.numberWithCountryCode} on:input={(e) => formData.mobile_number = e.target.value.replace(/\D/g, '')} class="w-full p-3 bg-[#28282B] border border-[#CACACA] rounded-lg text-[#F5F5F5] font-hind" required/>
                        </div>
                      </div>
                      <div class="w-1/2">
                          <label for="emailAddress" class="block text-[#F5F5F5] font-hind mb-1 mt-4">Email Address {#if formData.email === ''}<span style="color: red;">*</span>{/if}</label>
                          <input type="email" id="emailAddress" placeholder="Enter" bind:value={formData.email} class="w-full p-3 bg-[#28282B] border border-[#CACACA] rounded-lg text-[#F5F5F5] font-hind" required/>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Additional Information -->
          <div>
              <h3 class="text-2xl font-semibold mb-4 text-[#F5F5F5] font-montserrat">Additional Information</h3>
              <div class="space-y-4">
                <div class="flex gap-4">
                  <div class="w-1/2">
                      <label for="sport" class="block text-[#F5F5F5] font-hind mb-1 mt-4">Sport {#if formData.sport === ''}<span style="color: red;">*</span>{/if}</label>
                      <select id="sport" bind:value={formData.sport} class="w-full p-3 bg-[#28282B] border border-[#CACACA] rounded-lg required">
                          <option value="">Select Sport</option>
                          <option value="Box Office">Box Office</option>
                          <option value="MLB">MLB</option>
                          <option value="MLB">MLS</option>
                          <option value="NBA">NBA</option>
                          <option value="NFL">NFL</option>
                          <option value="NFL">NHL</option>
                          <option value="NFL">WNBA</option>
                          
                      </select>
                  </div>
                  {#if formData.sport}
                  <div class="w-1/2">
                      <label for="team" class="block text-[#F5F5F5] font-hind mb-1 mt-4">Team</label>
                      <select id="team" bind:value={formData[selectedTeamField]} class="w-full p-3 bg-[#28282B] border border-[#CACACA] rounded-lg required">
                           <option value="">Select Team</option>
              {#each teamList as team}
                              <option value={team}>{team}</option>
                          {/each}
                      </select>
                  </div>
                  {/if}
              </div>
                  <div class="flex gap-4">
                    <div class="w-1/2">
                      <label for="adLocation" class="block text-[#F5F5F5] font-hind mb-1 mt-4">Ad Location  {#if formData.adLocation === ''}<span style="color: red;">*</span>{/if}</label>
                      <select id="adLocation" bind:value={formData.adLocation} class="w-full p-3 bg-[#28282B] border border-[#CACACA] rounded-lg text-[#F5F5F5] font-hind required">
                          <option>Craigslist</option>
                          <option>Indeed</option>
                          <option>Zip Recruiter</option>
                          <option>Referral</option>
                      </select>
                    </div>
                      <div class="w-1/2">
                        <label for="paypalEmail" class="block text-[#F5F5F5] font-hind mb-1 mt-4">PayPal Email Address  {#if formData.paypal_email === ''}<span style="color: red;">*</span>{/if}</label>
                        <input type="email" id="paypalEmail" placeholder="PayPal Email Address" bind:value={formData.paypal_email} class="w-full p-3 bg-[#28282B] border border-[#CACACA] rounded-lg text-[#F5F5F5] font-hind" required/>
                            <p class="text-[#E8E8E8] text-sm mt-1 text-hind  opacity-">We send payments via PayPal. If you don't have an account you can create one for free on <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer" class="underline text-[#89B8FA]">PayPal.com</a>.</p>

                    </div>
                  </div>
              </div>
          </div>

          <!-- Documents -->
          <div>
            <h3 class="text-xl font-semibold mb-8 text-[#F5F5F5] font-montserrat">Verify Documents</h3>
            <div class="flex flex-col md:flex-row gap-4">
                  <!-- Photo ID Card -->
                  <div class="w-full md:w-1/2">
                    <div class="flex flex-col">
                        <label for="photoID" class="block text-[#F5F5F5] font-hind mb-1">Copy of Photo ID  {#if !uploadedFiles.photo_id}<span style="color: red;">*</span>{/if}</label>
                        <label for="photoID" class="w-full h-64 bg-[#28282B] border-dashed border-2 border-[#CACACA] rounded-lg text-[#F5F5F5] font-hind flex items-center justify-center cursor-pointer relative" required>
                            <input type="file" id="photoID" accept="image/*"  on:change={(e) => handleFileUpload(e, 'photo_id')} class="hidden" />
                            <div class="flex flex-col items-center justify-center">
                                <img src="/images/cloud.svg" alt="Upload Icon" class="w-12 h-12 mx-auto" />
                                <div class="text-[#F5F5F5] mt-2 text-center">Click or drag a file to upload</div>
                                <button class="bg-[#89B8FA] text-[#000000] border-none rounded-[50px] cursor-pointer font-hind mt-4 px-8 py-2">Browse</button>
                            </div>
                            <!-- Display uploaded file name, tick image, and oval line -->
                               {#if uploadedFiles.photo_id}
                            <div class="absolute bottom-0 left-0 right-0 flex flex-col p-4 mt-3 text-[#F5F5F5] text-sm items-center justify-between opacity-100 transition-opacity duration-300" required>
                                <div class="w-full flex items-center justify-between">
                                    <p class="truncate"> {uploadedFiles.photo_id.name}</p>
                                    <img src="/images/tick.svg" alt="Success" class="w-4 h-4 ml-2" />
                                </div>
                                <div class="ml-2">
                                    <img src="/images/ovalLine.svg" alt="Line" class="h-2" />
                                </div>
                                <div class="w-full flex items-center justify-between">
                                    <p>10MB</p>
                                    <p>100%</p>
                                </div>
                            </div>
                            {/if}
                        </label>
                        <p class="text-[#E8E8E8] text-sm mt-1 font-hind opacity-25">PHOTO ID MUST HAVE AN ADDRESS ON IT OR IT CANNOT BE ACCEPTED</p>
                    </div>
                </div>
                

                  <!-- Utility Bill Card -->
                  <div class="w-full md:w-1/2">
                    <div class="flex flex-col">
                        <label for="utilityBill" class="block text-[#F5F5F5] font-hind mb-1">Utility Bill {#if !uploadedFiles.utility_bill}<span style="color: red;">*</span>{/if}</label>
                        <label for="utilityBill" class="block w-full h-64 bg-[#28282B] border-dashed border-2 border-[#CACACA] rounded-lg text-[#F5F5F5] font-hind flex items-center justify-center cursor-pointer relative" required>
                            <input type="file" id="utilityBill" accept="images/*" on:change={(e) => handleFileUpload(e, 'utility_bill')}  class="hidden"/>
                            <div class="flex flex-col items-center justify-center">
                                <img src="/images/cloud.svg" alt="Upload Icon" class="w-12 h-12 mx-auto" />
                                <div class="text-[#F5F5F5] mt-2 text-center">Click or drag a file to upload</div>
                                <button class="bg-[#89B8FA] text-[#000000] border-none rounded-[50px] cursor-pointer font-hind mt-4 px-8 py-2">Browse</button>
                            </div>
                             {#if uploadedFiles.utility_bill}
                            <div class="absolute bottom-0 left-0 right-0 flex flex-col p-4 mt-3 text-[#F5F5F5] text-sm items-center justify-between opacity-100 transition-opacity duration-300" required>
                                <div class="w-full flex items-center justify-between">
                                    <p class="truncate"> {uploadedFiles.utility_bill.name}</p>
                                    <img src="/images/tick.svg" alt="Success" class="w-4 h-4 ml-2" />
                                </div>
                                <div class="ml-2">
                                    <img src="/images/ovalLine.svg" alt="Line" class="h-2" />
                                </div>
                                <div class="w-full flex items-center justify-between">
                                    <p>10MB</p>
                                    <p>100%</p>
                                </div>
                            </div>
                            {/if}
                        </label>
                        <p class="text-[#E8E8E8] text-sm mt-1 font-hind opacity-25">MUST BE A PHOTO OF AN ACTUAL BILL WITH MATCHING NAME AND ADDRESS. A PHOTO OF AN ENVELOPE WILL NOT WORK.</p>
                    </div>
                </div>
                
                
              </div>
          </div>

          <button type="submit" class="bg-[#89B8FA] text-[#000000] border-none rounded-[50px] cursor-pointer font-hind text-bold w-full md:w-auto py-3 px-8 mt-6">Submit</button>
      </form>
  </div>
</div>
{#if isSubmitted}
<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <div class="relative bg-[#28282B] h-[605px] w-[956px] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
    <button class="absolute top-2 right-4 text-[#F5F5F5]">
      <img src="/images/close.png" alt='tick' on:click={handleReset}>    </button>

    <img src="/images/submit.svg" alt="Submit" class="mb-4" />
    <p class="text-[#F5F5F5] font-hint">
      Thank you for submitting your information!
    </p>
    <p class="text-[#F5F5F5] font-hint">
      We will get back to you shortly.
    </p>
  </div>
</div>
{/if}