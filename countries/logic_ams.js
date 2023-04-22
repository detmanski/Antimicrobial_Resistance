// Create a map object.
let myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Load the JSON data from SK data_json/countried.json

let countries =  [
      {
          "id": 1, 
          "region_id": 13, 
          "country": "Bolivia", 
          "country_code": "BO", 
          "latitude": -16.290154, 
          "longitude": -63.588653
      }, 
      {
          "id": 2, 
          "region_id": 13, 
          "country": "Ecuador", 
          "country_code": "EC", 
          "latitude": -1.8312389999999998, 
          "longitude": -78.183406
      }, 
      {
          "id": 3, 
          "region_id": 13, 
          "country": "Peru", 
          "country_code": "PE", 
          "latitude": -9.189967, 
          "longitude": -75.015152
      }, 
      {
          "id": 4, 
          "region_id": 8, 
          "country": "Australia", 
          "country_code": "AU", 
          "latitude": -25.274398, 
          "longitude": 133.775136
      }, 
      {
          "id": 5, 
          "region_id": 8, 
          "country": "New Zealand", 
          "country_code": "NZ", 
          "latitude": -40.900557, 
          "longitude": 174.88597099999998
      }, 
      {
          "id": 6, 
          "region_id": 12, 
          "country": "Antigua and Barbuda", 
          "country_code": "AG", 
          "latitude": 17.060816, 
          "longitude": -61.796428000000006
      }, 
      {
          "id": 7, 
          "region_id": 12, 
          "country": "Bahamas", 
          "country_code": "BS", 
          "latitude": 25.03428, 
          "longitude": -77.39628
      }, 
      {
          "id": 8, 
          "region_id": 12, 
          "country": "Barbados", 
          "country_code": "BB", 
          "latitude": 13.193887, 
          "longitude": -59.543198
      }, 
      {
          "id": 9, 
          "region_id": 12, 
          "country": "Belize", 
          "country_code": "BZ", 
          "latitude": 17.189877, 
          "longitude": -88.49765
      }, 
      {
          "id": 10, 
          "region_id": 12, 
          "country": "Cuba", 
          "country_code": "CU", 
          "latitude": 21.521757, 
          "longitude": -77.78116700000001
      }, 
      {
          "id": 11, 
          "region_id": 12, 
          "country": "Dominica", 
          "country_code": "DM", 
          "latitude": 15.414999, 
          "longitude": -61.370976
      }, 
      {
          "id": 12, 
          "region_id": 12, 
          "country": "Dominican Republic", 
          "country_code": "DO", 
          "latitude": 18.735692999999998, 
          "longitude": -70.162651
      }, 
      {
          "id": 13, 
          "region_id": 12, 
          "country": "Grenada", 
          "country_code": "GD", 
          "latitude": 12.262775999999999, 
          "longitude": -61.604170999999994
      }, 
      {
          "id": 14, 
          "region_id": 12, 
          "country": "Guyana", 
          "country_code": "GY", 
          "latitude": 4.860416000000001, 
          "longitude": -58.93018000000001
      }, 
      {
          "id": 15, 
          "region_id": 12, 
          "country": "Haiti", 
          "country_code": "HT", 
          "latitude": 18.971187, 
          "longitude": -72.28521500000001
      }, 
      {
          "id": 16, 
          "region_id": 12, 
          "country": "Jamaica", 
          "country_code": "JM", 
          "latitude": 18.109581, 
          "longitude": -77.297508
      }, 
      {
          "id": 17, 
          "region_id": 12, 
          "country": "Saint Kitts and Nevis", 
          "country_code": "KN", 
          "latitude": 17.357822, 
          "longitude": -62.782998
      }, 
      {
          "id": 18, 
          "region_id": 12, 
          "country": "Saint Lucia", 
          "country_code": "LC", 
          "latitude": 13.909444, 
          "longitude": -60.97889300000001
      }, 
      {
          "id": 19, 
          "region_id": 12, 
          "country": "Saint Vincent and the Grenadines", 
          "country_code": "VC", 
          "latitude": 12.984305, 
          "longitude": -61.287228000000006
      }, 
      {
          "id": 20, 
          "region_id": 12, 
          "country": "Suriname", 
          "country_code": "SR", 
          "latitude": 3.9193050000000005, 
          "longitude": -56.02778299999999
      }, 
      {
          "id": 21, 
          "region_id": 12, 
          "country": "Trinidad and Tobago", 
          "country_code": "TT", 
          "latitude": 10.691803, 
          "longitude": -61.222503
      }, 
      {
          "id": 22, 
          "region_id": 4, 
          "country": "Armenia", 
          "country_code": "AM", 
          "latitude": 40.069099, 
          "longitude": 45.038189
      }, 
      {
          "id": 23, 
          "region_id": 4, 
          "country": "Azerbaijan", 
          "country_code": "AZ", 
          "latitude": 40.143105, 
          "longitude": 47.576927000000005
      }, 
      {
          "id": 24, 
          "region_id": 4, 
          "country": "Georgia", 
          "country_code": "GE", 
          "latitude": 42.315407, 
          "longitude": 43.356891999999995
      }, 
      {
          "id": 25, 
          "region_id": 4, 
          "country": "Kazakhstan", 
          "country_code": "KZ", 
          "latitude": 48.019573, 
          "longitude": 66.923684
      }, 
      {
          "id": 26, 
          "region_id": 4, 
          "country": "Kyrgyzstan", 
          "country_code": "KG", 
          "latitude": 41.20438, 
          "longitude": 74.766098
      }, 
      {
          "id": 27, 
          "region_id": 4, 
          "country": "Mongolia", 
          "country_code": "MN", 
          "latitude": 46.862496, 
          "longitude": 103.84665600000001
      }, 
      {
          "id": 28, 
          "region_id": 4, 
          "country": "Tajikistan", 
          "country_code": "TJ", 
          "latitude": 38.861034000000004, 
          "longitude": 71.276093
      }, 
      {
          "id": 29, 
          "region_id": 4, 
          "country": "Turkmenistan", 
          "country_code": "TM", 
          "latitude": 38.969719, 
          "longitude": 59.556278000000006
      }, 
      {
          "id": 30, 
          "region_id": 4, 
          "country": "Uzbekistan", 
          "country_code": "UZ", 
          "latitude": 41.377491, 
          "longitude": 64.585262
      }, 
      {
          "id": 31, 
          "region_id": 5, 
          "country": "Albania", 
          "country_code": "AL", 
          "latitude": 41.153332, 
          "longitude": 20.168331
      }, 
      {
          "id": 32, 
          "region_id": 5, 
          "country": "Bosnia and Herzegovina", 
          "country_code": "BA", 
          "latitude": 43.915886, 
          "longitude": 17.679076000000002
      }, 
      {
          "id": 33, 
          "region_id": 5, 
          "country": "Bulgaria", 
          "country_code": "BG", 
          "latitude": 42.733883, 
          "longitude": 25.48583
      }, 
      {
          "id": 34, 
          "region_id": 5, 
          "country": "Croatia", 
          "country_code": "HR", 
          "latitude": 45.1, 
          "longitude": 15.2
      }, 
      {
          "id": 35, 
          "region_id": 5, 
          "country": "Czechia", 
          "country_code": "CZ", 
          "latitude": 49.817492, 
          "longitude": 15.472961999999999
      }, 
      {
          "id": 36, 
          "region_id": 5, 
          "country": "Hungary", 
          "country_code": "HU", 
          "latitude": 47.162494, 
          "longitude": 19.503304
      }, 
      {
          "id": 37, 
          "region_id": 5, 
          "country": "Kosovo", 
          "country_code": "XK", 
          "latitude": 42.602636, 
          "longitude": 20.902977
      }, 
      {
          "id": 38, 
          "region_id": 5, 
          "country": "Montenegro", 
          "country_code": "ME", 
          "latitude": 42.708678000000006, 
          "longitude": 19.37439
      }, 
      {
          "id": 39, 
          "region_id": 5, 
          "country": "North Macedonia", 
          "country_code": "MK", 
          "latitude": 41.608635, 
          "longitude": 21.745275
      }, 
      {
          "id": 40, 
          "region_id": 5, 
          "country": "Poland", 
          "country_code": "PL", 
          "latitude": 51.919438, 
          "longitude": 19.145135999999997
      }, 
      {
          "id": 41, 
          "region_id": 5, 
          "country": "Romania", 
          "country_code": "RO", 
          "latitude": 45.943160999999996, 
          "longitude": 24.96676
      }, 
      {
          "id": 42, 
          "region_id": 5, 
          "country": "Serbia", 
          "country_code": "RS", 
          "latitude": 44.016521000000004, 
          "longitude": 21.005859
      }, 
      {
          "id": 43, 
          "region_id": 5, 
          "country": "Slovakia", 
          "country_code": "SK", 
          "latitude": 48.669026, 
          "longitude": 19.699023999999998
      }, 
      {
          "id": 44, 
          "region_id": 5, 
          "country": "Slovenia", 
          "country_code": "SI", 
          "latitude": 46.151241, 
          "longitude": 14.995463
      }, 
      {
          "id": 45, 
          "region_id": 14, 
          "country": "Colombia", 
          "country_code": "CO", 
          "latitude": 4.570868, 
          "longitude": -74.297333
      }, 
      {
          "id": 46, 
          "region_id": 14, 
          "country": "Costa Rica", 
          "country_code": "CR", 
          "latitude": 9.748917, 
          "longitude": -83.753428
      }, 
      {
          "id": 47, 
          "region_id": 14, 
          "country": "El Salvador", 
          "country_code": "SV", 
          "latitude": 13.794185, 
          "longitude": -88.89653
      }, 
      {
          "id": 48, 
          "region_id": 14, 
          "country": "Guatemala", 
          "country_code": "GT", 
          "latitude": 15.783470999999999, 
          "longitude": -90.23075899999999
      }, 
      {
          "id": 49, 
          "region_id": 14, 
          "country": "Honduras", 
          "country_code": "HN", 
          "latitude": 15.199998999999998, 
          "longitude": -86.241905
      }, 
      {
          "id": 50, 
          "region_id": 14, 
          "country": "Mexico", 
          "country_code": "MX", 
          "latitude": 23.634501, 
          "longitude": -102.552784
      }, 
      {
          "id": 51, 
          "region_id": 14, 
          "country": "Nicaragua", 
          "country_code": "NI", 
          "latitude": 12.865416, 
          "longitude": -85.207229
      }, 
      {
          "id": 52, 
          "region_id": 14, 
          "country": "Panama", 
          "country_code": "PA", 
          "latitude": 8.537981, 
          "longitude": -80.782127
      }, 
      {
          "id": 53, 
          "region_id": 14, 
          "country": "Venezuela", 
          "country_code": "VE", 
          "latitude": 6.42375, 
          "longitude": -66.58973
      }, 
      {
          "id": 54, 
          "region_id": 18, 
          "country": "Angola", 
          "country_code": "AO", 
          "latitude": -11.202691999999999, 
          "longitude": 17.873887
      }, 
      {
          "id": 55, 
          "region_id": 18, 
          "country": "Central African Republic", 
          "country_code": "CF", 
          "latitude": 6.611111, 
          "longitude": 20.939444
      }, 
      {
          "id": 56, 
          "region_id": 18, 
          "country": "Congo", 
          "country_code": "CG", 
          "latitude": -0.228021, 
          "longitude": 15.827658999999999
      }, 
      {
          "id": 57, 
          "region_id": 18, 
          "country": "Democratic Republic of the Congo", 
          "country_code": "CD", 
          "latitude": -4.038333000000001, 
          "longitude": 21.758664000000003
      }, 
      {
          "id": 58, 
          "region_id": 18, 
          "country": "Equatorial Guinea", 
          "country_code": "GQ", 
          "latitude": 1.6508009999999997, 
          "longitude": 10.267895
      }, 
      {
          "id": 59, 
          "region_id": 18, 
          "country": "Gabon", 
          "country_code": "GA", 
          "latitude": -0.803689, 
          "longitude": 11.609444
      }, 
      {
          "id": 60, 
          "region_id": 1, 
          "country": "China", 
          "country_code": "CN", 
          "latitude": 35.86166, 
          "longitude": 104.195397
      }, 
      {
          "id": 61, 
          "region_id": 1, 
          "country": "Democratic People's Republic of Korea", 
          "country_code": "KP", 
          "latitude": 40.339852, 
          "longitude": 127.510093
      }, 
      {
          "id": 62, 
          "region_id": 1, 
          "country": "Taiwan", 
          "country_code": "TW", 
          "latitude": 23.69781, 
          "longitude": 120.96051499999999
      }, 
      {
          "id": 63, 
          "region_id": 6, 
          "country": "Belarus", 
          "country_code": "BY", 
          "latitude": 53.709807, 
          "longitude": 27.953389
      }, 
      {
          "id": 64, 
          "region_id": 6, 
          "country": "Estonia", 
          "country_code": "EE", 
          "latitude": 58.595271999999994, 
          "longitude": 25.013607
      }, 
      {
          "id": 65, 
          "region_id": 6, 
          "country": "Latvia", 
          "country_code": "LV", 
          "latitude": 56.879635, 
          "longitude": 24.603189
      }, 
      {
          "id": 66, 
          "region_id": 6, 
          "country": "Lithuania", 
          "country_code": "LT", 
          "latitude": 55.169438, 
          "longitude": 23.881275
      }, 
      {
          "id": 67, 
          "region_id": 6, 
          "country": "Republic of Moldova", 
          "country_code": "MD", 
          "latitude": 47.411631, 
          "longitude": 28.369884999999996
      }, 
      {
          "id": 68, 
          "region_id": 6, 
          "country": "Russian Federation", 
          "country_code": "RU", 
          "latitude": 61.52401, 
          "longitude": 105.31875600000001
      }, 
      {
          "id": 69, 
          "region_id": 6, 
          "country": "Ukraine", 
          "country_code": "UA", 
          "latitude": 48.379433, 
          "longitude": 31.16558
      }, 
      {
          "id": 70, 
          "region_id": 19, 
          "country": "Burundi", 
          "country_code": "BI", 
          "latitude": -3.3730559999999996, 
          "longitude": 29.918885999999997
      }, 
      {
          "id": 71, 
          "region_id": 19, 
          "country": "Comoros", 
          "country_code": "KM", 
          "latitude": -11.875001, 
          "longitude": 43.872219
      }, 
      {
          "id": 72, 
          "region_id": 19, 
          "country": "Djibouti", 
          "country_code": "DJ", 
          "latitude": 11.825138, 
          "longitude": 42.590275
      }, 
      {
          "id": 73, 
          "region_id": 19, 
          "country": "Eritrea", 
          "country_code": "ER", 
          "latitude": 15.179383999999999, 
          "longitude": 39.782334000000006
      }, 
      {
          "id": 74, 
          "region_id": 19, 
          "country": "Ethiopia", 
          "country_code": "ET", 
          "latitude": 9.145, 
          "longitude": 40.489672999999996
      }, 
      {
          "id": 75, 
          "region_id": 19, 
          "country": "Kenya", 
          "country_code": "KE", 
          "latitude": -0.023559, 
          "longitude": 37.906193
      }, 
      {
          "id": 76, 
          "region_id": 19, 
          "country": "Madagascar", 
          "country_code": "MG", 
          "latitude": -18.766947000000002, 
          "longitude": 46.869107
      }, 
      {
          "id": 77, 
          "region_id": 19, 
          "country": "Malawi", 
          "country_code": "MW", 
          "latitude": -13.254307999999998, 
          "longitude": 34.301525
      }, 
      {
          "id": 78, 
          "region_id": 19, 
          "country": "Mozambique", 
          "country_code": "MZ", 
          "latitude": -18.665695, 
          "longitude": 35.529562
      }, 
      {
          "id": 79, 
          "region_id": 19, 
          "country": "Rwanda", 
          "country_code": "RW", 
          "latitude": -1.940278, 
          "longitude": 29.873888
      }, 
      {
          "id": 80, 
          "region_id": 19, 
          "country": "Somalia", 
          "country_code": "SO", 
          "latitude": 5.152149, 
          "longitude": 46.199616
      }, 
      {
          "id": 81, 
          "region_id": 19, 
          "country": "South Sudan", 
          "country_code": "SSu", 
          "latitude": 6.8770, 
          "longitude": 31.3070
      }, 
      {
          "id": 82, 
          "region_id": 19, 
          "country": "Sudan", 
          "country_code": "SD", 
          "latitude": 12.862807, 
          "longitude": 30.217636
      }, 
      {
          "id": 83, 
          "region_id": 19, 
          "country": "Uganda", 
          "country_code": "UG", 
          "latitude": 1.373333, 
          "longitude": 32.290275
      }, 
      {
          "id": 84, 
          "region_id": 19, 
          "country": "United Republic of Tanzania", 
          "country_code": "TZ", 
          "latitude": -6.369028, 
          "longitude": 34.888822
      }, 
      {
          "id": 85, 
          "region_id": 19, 
          "country": "Zambia", 
          "country_code": "ZM", 
          "latitude": -13.133897, 
          "longitude": 27.849332
      }, 
      {
          "id": 86, 
          "region_id": 7, 
          "country": "Brunei Darussalam", 
          "country_code": "BDA", 
          "latitude": 4.5353, 
          "longitude": 114.7277
      }, 
      {
          "id": 87, 
          "region_id": 7, 
          "country": "Japan", 
          "country_code": "JP", 
          "latitude": 36.204824, 
          "longitude": 138.252924
      }, 
      {
          "id": 88, 
          "region_id": 7, 
          "country": "Republic of Korea", 
          "country_code": "KR", 
          "latitude": 35.907757000000004, 
          "longitude": 127.766922
      }, 
      {
          "id": 89, 
          "region_id": 7, 
          "country": "Singapore", 
          "country_code": "SG", 
          "latitude": 1.352083, 
          "longitude": 103.819836
      }, 
      {
          "id": 90, 
          "region_id": 11, 
          "country": "Canada", 
          "country_code": "CA", 
          "latitude": 56.130366, 
          "longitude": -106.34677099999999
      }, 
      {
          "id": 91, 
          "region_id": 11, 
          "country": "United States of America", 
          "country_code": "US", 
          "latitude": 37.09024, 
          "longitude": -95.712891
      }, 
      {
          "id": 92, 
          "region_id": 16, 
          "country": "Afghanistan", 
          "country_code": "AF", 
          "latitude": 33.93911, 
          "longitude": 67.709953
      }, 
      {
          "id": 93, 
          "region_id": 16, 
          "country": "Algeria", 
          "country_code": "DZ", 
          "latitude": 28.033886, 
          "longitude": 1.6596259999999998
      }, 
      {
          "id": 94, 
          "region_id": 16, 
          "country": "Bahrain", 
          "country_code": "BH", 
          "latitude": 25.930414000000003, 
          "longitude": 50.637772
      }, 
      {
          "id": 95, 
          "region_id": 16, 
          "country": "Egypt", 
          "country_code": "EG", 
          "latitude": 26.820553000000004, 
          "longitude": 30.802497999999996
      }, 
      {
          "id": 96, 
          "region_id": 16, 
          "country": "Iran", 
          "country_code": "IR", 
          "latitude": 32.427908, 
          "longitude": 53.68804599999999
      }, 
      {
          "id": 97, 
          "region_id": 16, 
          "country": "Iraq", 
          "country_code": "IQ", 
          "latitude": 33.223191, 
          "longitude": 43.679291
      }, 
      {
          "id": 98, 
          "region_id": 16, 
          "country": "Jordan", 
          "country_code": "JO", 
          "latitude": 30.585164000000002, 
          "longitude": 36.238414
      }, 
      {
          "id": 99, 
          "region_id": 16, 
          "country": "Kuwait", 
          "country_code": "KW", 
          "latitude": 29.311659999999996, 
          "longitude": 47.481766
      }, 
      {
          "id": 100, 
          "region_id": 16, 
          "country": "Lebanon", 
          "country_code": "LB", 
          "latitude": 33.854721000000005, 
          "longitude": 35.862285
      }, 
      {
          "id": 101, 
          "region_id": 16, 
          "country": "Libya", 
          "country_code": "LY", 
          "latitude": 26.3351, 
          "longitude": 17.228331
      }, 
      {
          "id": 102, 
          "region_id": 16, 
          "country": "Morocco", 
          "country_code": "MA", 
          "latitude": 31.791702, 
          "longitude": -7.09262
      }, 
      {
          "id": 103, 
          "region_id": 16, 
          "country": "Oman", 
          "country_code": "OM", 
          "latitude": 21.512583, 
          "longitude": 55.923255000000005
      }, 
      {
          "id": 104, 
          "region_id": 16, 
          "country": "Palestine", 
          "country_code": "PAL", 
          "latitude": 31.9522, 
          "longitude": 35.2332
      }, 
      {
          "id": 105, 
          "region_id": 16, 
          "country": "Qatar", 
          "country_code": "QA", 
          "latitude": 25.354826, 
          "longitude": 51.183884
      }, 
      {
          "id": 106, 
          "region_id": 16, 
          "country": "Saudi Arabia", 
          "country_code": "SA", 
          "latitude": 23.885942, 
          "longitude": 45.079162
      }, 
      {
          "id": 107, 
          "region_id": 16, 
          "country": "Syrian Arab Republic", 
          "country_code": "SY", 
          "latitude": 34.802075, 
          "longitude": 38.996815000000005
      }, 
      {
          "id": 108, 
          "region_id": 16, 
          "country": "Tunisia", 
          "country_code": "TN", 
          "latitude": 33.886917, 
          "longitude": 9.537499
      }, 
      {
          "id": 109, 
          "region_id": 16, 
          "country": "T\u00c3\u00bcrkiye", 
          "country_code": "TR", 
          "latitude": 38.963745, 
          "longitude": 35.243322
      }, 
      {
          "id": 110, 
          "region_id": 16, 
          "country": "United Arab Emirates", 
          "country_code": "AE", 
          "latitude": 23.424076, 
          "longitude": 53.847818000000004
      }, 
      {
          "id": 111, 
          "region_id": 16, 
          "country": "Western Sahara", 
          "country_code": "EH", 
          "latitude": 24.215526999999998, 
          "longitude": -12.885834
      }, 
      {
          "id": 112, 
          "region_id": 16, 
          "country": "Yemen", 
          "country_code": "YE", 
          "latitude": 15.552726999999999, 
          "longitude": 48.516388
      }, 
      {
          "id": 113, 
          "region_id": 3, 
          "country": "Fiji", 
          "country_code": "FJ", 
          "latitude": -16.578193, 
          "longitude": 179.414413
      }, 
      {
          "id": 114, 
          "region_id": 3, 
          "country": "Kiribati", 
          "country_code": "KI", 
          "latitude": -3.3704169999999998, 
          "longitude": -168.734039
      }, 
      {
          "id": 115, 
          "region_id": 3, 
          "country": "Marshall Islands", 
          "country_code": "MH", 
          "latitude": 7.131474000000001, 
          "longitude": 171.184478
      }, 
      {
          "id": 116, 
          "region_id": 3, 
          "country": "Micronesia", 
          "country_code": "FM", 
          "latitude": 7.425553999999999, 
          "longitude": 150.550812
      }, 
      {
          "id": 117, 
          "region_id": 3, 
          "country": "Nauru", 
          "country_code": "NR", 
          "latitude": -0.522778, 
          "longitude": 166.931503
      }, 
      {
          "id": 118, 
          "region_id": 3, 
          "country": "Niue", 
          "country_code": "NU", 
          "latitude": -19.054445, 
          "longitude": -169.867233
      }, 
      {
          "id": 119, 
          "region_id": 3, 
          "country": "Palau", 
          "country_code": "PW", 
          "latitude": 7.51498, 
          "longitude": 134.58252
      }, 
      {
          "id": 120, 
          "region_id": 3, 
          "country": "Papua New Guinea", 
          "country_code": "PG", 
          "latitude": -6.314993, 
          "longitude": 143.95555
      }, 
      {
          "id": 121, 
          "region_id": 3, 
          "country": "Samoa", 
          "country_code": "WS", 
          "latitude": -13.759029, 
          "longitude": -172.10462900000002
      }, 
      {
          "id": 122, 
          "region_id": 3, 
          "country": "Solomon Islands", 
          "country_code": "SB", 
          "latitude": -9.645710000000001, 
          "longitude": 160.156194
      }, 
      {
          "id": 123, 
          "region_id": 3, 
          "country": "Tonga", 
          "country_code": "TO", 
          "latitude": -21.178986, 
          "longitude": -175.198242
      }, 
      {
          "id": 124, 
          "region_id": 3, 
          "country": "Tuvalu", 
          "country_code": "TV", 
          "latitude": -7.109535, 
          "longitude": 177.64933
      }, 
      {
          "id": 125, 
          "region_id": 3, 
          "country": "Vanuatu", 
          "country_code": "VU", 
          "latitude": -15.376706, 
          "longitude": 166.959158
      }, 
      {
          "id": 126, 
          "region_id": 17, 
          "country": "Bangladesh", 
          "country_code": "BD", 
          "latitude": 23.684994, 
          "longitude": 90.35633100000001
      }, 
      {
          "id": 127, 
          "region_id": 17, 
          "country": "Bhutan", 
          "country_code": "BT", 
          "latitude": 27.514162, 
          "longitude": 90.433601
      }, 
      {
          "id": 128, 
          "region_id": 17, 
          "country": "India", 
          "country_code": "IN", 
          "latitude": 20.593684, 
          "longitude": 78.96288
      }, 
      {
          "id": 129, 
          "region_id": 17, 
          "country": "Nepal", 
          "country_code": "NP", 
          "latitude": 28.394857000000002, 
          "longitude": 84.12400799999999
      }, 
      {
          "id": 130, 
          "region_id": 17, 
          "country": "Pakistan", 
          "country_code": "PK", 
          "latitude": 30.375321000000003, 
          "longitude": 69.345116
      }, 
      {
          "id": 131, 
          "region_id": 2, 
          "country": "Cambodia", 
          "country_code": "KH", 
          "latitude": 12.565679, 
          "longitude": 104.990963
      }, 
      {
          "id": 132, 
          "region_id": 2, 
          "country": "Indonesia", 
          "country_code": "ID", 
          "latitude": -0.789275, 
          "longitude": 113.921327
      }, 
      {
          "id": 133, 
          "region_id": 2, 
          "country": "Lao People's Democratic Republic", 
          "country_code": "LA", 
          "latitude": 19.856270000000002, 
          "longitude": 102.495496
      }, 
      {
          "id": 134, 
          "region_id": 2, 
          "country": "Malaysia", 
          "country_code": "MY", 
          "latitude": 4.210483999999999, 
          "longitude": 101.97576600000001
      }, 
      {
          "id": 135, 
          "region_id": 2, 
          "country": "Maldives", 
          "country_code": "MV", 
          "latitude": 3.202778, 
          "longitude": 73.22068
      }, 
      {
          "id": 136, 
          "region_id": 2, 
          "country": "Mauritius", 
          "country_code": "MU", 
          "latitude": -20.348404000000002, 
          "longitude": 57.552152
      }, 
      {
          "id": 137, 
          "region_id": 2, 
          "country": "Myanmar", 
          "country_code": "MM", 
          "latitude": 21.913965, 
          "longitude": 95.956223
      }, 
      {
          "id": 138, 
          "region_id": 2, 
          "country": "Philippines", 
          "country_code": "PH", 
          "latitude": 12.879721, 
          "longitude": 121.77401699999999
      }, 
      {
          "id": 139, 
          "region_id": 2, 
          "country": "Seychelles", 
          "country_code": "SC", 
          "latitude": -4.679574, 
          "longitude": 55.491977
      }, 
      {
          "id": 140, 
          "region_id": 2, 
          "country": "Sri Lanka", 
          "country_code": "LK", 
          "latitude": 7.873054, 
          "longitude": 80.77179699999999
      }, 
      {
          "id": 141, 
          "region_id": 2, 
          "country": "Thailand", 
          "country_code": "TH", 
          "latitude": 15.870032, 
          "longitude": 100.992541
      }, 
      {
          "id": 142, 
          "region_id": 2, 
          "country": "Timor-Leste", 
          "country_code": "TL", 
          "latitude": -8.874217, 
          "longitude": 125.727539
      }, 
      {
          "id": 143, 
          "region_id": 2, 
          "country": "Viet Nam", 
          "country_code": "VN", 
          "latitude": 14.058323999999999, 
          "longitude": 108.277199
      }, 
      {
          "id": 144, 
          "region_id": 10, 
          "country": "Argentina", 
          "country_code": "AR", 
          "latitude": -38.416097, 
          "longitude": -63.616671999999994
      }, 
      {
          "id": 145, 
          "region_id": 10, 
          "country": "Chile", 
          "country_code": "CL", 
          "latitude": -35.675146999999996, 
          "longitude": -71.542969
      }, 
      {
          "id": 146, 
          "region_id": 10, 
          "country": "Uruguay", 
          "country_code": "UY", 
          "latitude": -32.522779, 
          "longitude": -55.765834999999996
      }, 
      {
          "id": 147, 
          "region_id": 20, 
          "country": "Botswana", 
          "country_code": "BW", 
          "latitude": -22.328474, 
          "longitude": 24.684866
      }, 
      {
          "id": 148, 
          "region_id": 20, 
          "country": "Eswatini", 
          "country_code": "EW", 
          "latitude": 26.5225, 
          "longitude": 31.4659
      }, 
      {
          "id": 149, 
          "region_id": 20, 
          "country": "Lesotho", 
          "country_code": "LS", 
          "latitude": -29.609988, 
          "longitude": 28.233608
      }, 
      {
          "id": 150, 
          "region_id": 20, 
          "country": "Namibia", 
          "country_code": "NB", 
          "latitude": -22.957639999999998, 
          "longitude": 18.49041
      }, 
      {
          "id": 151, 
          "region_id": 20, 
          "country": "South Africa", 
          "country_code": "ZA", 
          "latitude": -30.559482, 
          "longitude": 22.937506
      }, 
      {
          "id": 152, 
          "region_id": 20, 
          "country": "Zimbabwe", 
          "country_code": "ZW", 
          "latitude": -19.015438, 
          "longitude": 29.154857
      }, 
      {
          "id": 153, 
          "region_id": 15, 
          "country": "Brazil", 
          "country_code": "BR", 
          "latitude": -14.235004, 
          "longitude": -51.92528
      }, 
      {
          "id": 154, 
          "region_id": 15, 
          "country": "Paraguay", 
          "country_code": "PY", 
          "latitude": -23.442503, 
          "longitude": -58.44383199999999
      }, 
      {
          "id": 155, 
          "region_id": 9, 
          "country": "Andorra", 
          "country_code": "AD", 
          "latitude": 42.546245, 
          "longitude": 1.6015540000000001
      }, 
      {
          "id": 156, 
          "region_id": 9, 
          "country": "Austria", 
          "country_code": "AT", 
          "latitude": 47.516231, 
          "longitude": 14.550072
      }, 
      {
          "id": 157, 
          "region_id": 9, 
          "country": "Belgium", 
          "country_code": "BE", 
          "latitude": 50.503887, 
          "longitude": 4.469936
      }, 
      {
          "id": 158, 
          "region_id": 9, 
          "country": "Cyprus", 
          "country_code": "CY", 
          "latitude": 35.126413, 
          "longitude": 33.429859
      }, 
      {
          "id": 159, 
          "region_id": 9, 
          "country": "Denmark", 
          "country_code": "DK", 
          "latitude": 56.26392, 
          "longitude": 9.501785
      }, 
      {
          "id": 160, 
          "region_id": 9, 
          "country": "Finland", 
          "country_code": "FI", 
          "latitude": 61.92411, 
          "longitude": 25.748151
      }, 
      {
          "id": 161, 
          "region_id": 9, 
          "country": "France", 
          "country_code": "FR", 
          "latitude": 46.227638, 
          "longitude": 2.213749
      }, 
      {
          "id": 162, 
          "region_id": 9, 
          "country": "Germany", 
          "country_code": "DE", 
          "latitude": 51.165690999999995, 
          "longitude": 10.451526
      }, 
      {
          "id": 163, 
          "region_id": 9, 
          "country": "Greece", 
          "country_code": "GR", 
          "latitude": 39.074208, 
          "longitude": 21.824312
      }, 
      {
          "id": 164, 
          "region_id": 9, 
          "country": "Guernsey", 
          "country_code": "GG", 
          "latitude": 49.465691, 
          "longitude": -2.5852779999999997
      }, 
      {
          "id": 165, 
          "region_id": 9, 
          "country": "Iceland", 
          "country_code": "IS", 
          "latitude": 64.96305100000001, 
          "longitude": -19.020835
      }, 
      {
          "id": 166, 
          "region_id": 9, 
          "country": "Ireland", 
          "country_code": "IE", 
          "latitude": 53.41291, 
          "longitude": -8.243889999999999
      }, 
      {
          "id": 167, 
          "region_id": 9, 
          "country": "Isle of Man", 
          "country_code": "IM", 
          "latitude": 54.236107, 
          "longitude": -4.548056
      }, 
      {
          "id": 168, 
          "region_id": 9, 
          "country": "Israel", 
          "country_code": "IL", 
          "latitude": 31.046051000000002, 
          "longitude": 34.851612
      }, 
      {
          "id": 169, 
          "region_id": 9, 
          "country": "Italy", 
          "country_code": "IT", 
          "latitude": 41.87194, 
          "longitude": 12.56738
      }, 
      {
          "id": 170, 
          "region_id": 9, 
          "country": "Jersey", 
          "country_code": "JE", 
          "latitude": 49.214439, 
          "longitude": -2.13125
      }, 
      {
          "id": 171, 
          "region_id": 9, 
          "country": "Liechtenstein", 
          "country_code": "LI", 
          "latitude": 47.166000000000004, 
          "longitude": 9.555373
      }, 
      {
          "id": 172, 
          "region_id": 9, 
          "country": "Luxembourg", 
          "country_code": "LU", 
          "latitude": 49.815273, 
          "longitude": 6.129583
      }, 
      {
          "id": 173, 
          "region_id": 9, 
          "country": "Malta", 
          "country_code": "MT", 
          "latitude": 35.937496, 
          "longitude": 14.375416
      }, 
      {
          "id": 174, 
          "region_id": 9, 
          "country": "Monaco", 
          "country_code": "MC", 
          "latitude": 43.750298, 
          "longitude": 7.412841
      }, 
      {
          "id": 175, 
          "region_id": 9, 
          "country": "Netherlands", 
          "country_code": "NL", 
          "latitude": 52.132633, 
          "longitude": 5.291266
      }, 
      {
          "id": 176, 
          "region_id": 9, 
          "country": "Norway", 
          "country_code": "NO", 
          "latitude": 60.472024, 
          "longitude": 8.468946
      }, 
      {
          "id": 177, 
          "region_id": 9, 
          "country": "Portugal", 
          "country_code": "PT", 
          "latitude": 39.399871999999995, 
          "longitude": -8.224454
      }, 
      {
          "id": 178, 
          "region_id": 9, 
          "country": "San Marino", 
          "country_code": "SM", 
          "latitude": 43.94236, 
          "longitude": 12.457777
      }, 
      {
          "id": 179, 
          "region_id": 9, 
          "country": "Spain", 
          "country_code": "ES", 
          "latitude": 40.463667, 
          "longitude": -3.7492199999999998
      }, 
      {
          "id": 180, 
          "region_id": 9, 
          "country": "Sweden", 
          "country_code": "SE", 
          "latitude": 60.128161, 
          "longitude": 18.643501
      }, 
      {
          "id": 181, 
          "region_id": 9, 
          "country": "Switzerland", 
          "country_code": "CH", 
          "latitude": 46.818188, 
          "longitude": 8.227511999999999
      }, 
      {
          "id": 182, 
          "region_id": 9, 
          "country": "United Kingdom", 
          "country_code": "GB", 
          "latitude": 55.378051, 
          "longitude": -3.435973
      }, 
      {
          "id": 183, 
          "region_id": 9, 
          "country": "Vatican City", 
          "country_code": "VA", 
          "latitude": 41.902916, 
          "longitude": 12.453389
      }, 
      {
          "id": 184, 
          "region_id": 21, 
          "country": "Benin", 
          "country_code": "BJ", 
          "latitude": 9.30769, 
          "longitude": 2.315834
      }, 
      {
          "id": 185, 
          "region_id": 21, 
          "country": "Burkina Faso", 
          "country_code": "BF", 
          "latitude": 12.238333, 
          "longitude": -1.561593
      }, 
      {
          "id": 186, 
          "region_id": 21, 
          "country": "Cabo Verde", 
          "country_code": "CBV", 
          "latitude": 16.5388, 
          "longitude": 23.0418
      }, 
      {
          "id": 187, 
          "region_id": 21, 
          "country": "Cameroon", 
          "country_code": "CM", 
          "latitude": 7.369722, 
          "longitude": 12.354722
      }, 
      {
          "id": 188, 
          "region_id": 21, 
          "country": "Chad", 
          "country_code": "TD", 
          "latitude": 15.454166, 
          "longitude": 18.732207
      }, 
      {
          "id": 189, 
          "region_id": 21, 
          "country": "C\u00c3\u00b4te d'Ivoire", 
          "country_code": "CI", 
          "latitude": 7.539989, 
          "longitude": -5.54708
      }, 
      {
          "id": 190, 
          "region_id": 21, 
          "country": "Gambia", 
          "country_code": "GM", 
          "latitude": 13.443182, 
          "longitude": -15.310139000000001
      }, 
      {
          "id": 191, 
          "region_id": 21, 
          "country": "Ghana", 
          "country_code": "GH", 
          "latitude": 7.946527000000001, 
          "longitude": -1.0231940000000002
      }, 
      {
          "id": 192, 
          "region_id": 21, 
          "country": "Guinea", 
          "country_code": "GN", 
          "latitude": 9.945587, 
          "longitude": -9.696645
      }, 
      {
          "id": 193, 
          "region_id": 21, 
          "country": "Guinea-Bissau", 
          "country_code": "GW", 
          "latitude": 11.803749, 
          "longitude": -15.180413
      }, 
      {
          "id": 194, 
          "region_id": 21, 
          "country": "Liberia", 
          "country_code": "LR", 
          "latitude": 6.4280550000000005, 
          "longitude": -9.429499
      }, 
      {
          "id": 195, 
          "region_id": 21, 
          "country": "Mali", 
          "country_code": "ML", 
          "latitude": 17.570692, 
          "longitude": -3.9961660000000006
      }, 
      {
          "id": 196, 
          "region_id": 21, 
          "country": "Mauritania", 
          "country_code": "MR", 
          "latitude": 21.00789, 
          "longitude": -10.940835
      }, 
      {
          "id": 197, 
          "region_id": 21, 
          "country": "Niger", 
          "country_code": "NE", 
          "latitude": 17.607789, 
          "longitude": 8.081666
      }, 
      {
          "id": 198, 
          "region_id": 21, 
          "country": "Nigeria", 
          "country_code": "NG", 
          "latitude": 9.081999, 
          "longitude": 8.675277000000001
      }, 
      {
          "id": 199, 
          "region_id": 21, 
          "country": "Sao Tome and Principe", 
          "country_code": "STP", 
          "latitude": 0.1864, 
          "longitude": 6.6131
      }, 
      {
          "id": 200, 
          "region_id": 21, 
          "country": "Senegal", 
          "country_code": "SN", 
          "latitude": 14.497401000000002, 
          "longitude": -14.452361999999999
      }, 
      {
          "id": 201, 
          "region_id": 21, 
          "country": "Sierra Leone", 
          "country_code": "SL", 
          "latitude": 8.460555000000001, 
          "longitude": -11.779889
      }, 
      {
          "id": 202, 
          "region_id": 21, 
          "country": "Togo", 
          "country_code": "TG", 
          "latitude": 8.619543, 
          "longitude": 0.824782
      }
  ]
;


var regions = [
    {
        "id": 1, 
        "region": "East Asia"
    }, 
    {
        "id": 2, 
        "region": "Southeast Asia"
    }, 
    {
        "id": 3, 
        "region": "Oceania"
    }, 
    {
        "id": 4, 
        "region": "Central Asia"
    }, 
    {
        "id": 5, 
        "region": "Central Europe"
    }, 
    {
        "id": 6, 
        "region": "Eastern Europe"
    }, 
    {
        "id": 7, 
        "region": "High-income Asia Pacific"
    }, 
    {
        "id": 8, 
        "region": "Australasia"
    }, 
    {
        "id": 9, 
        "region": "Western Europe"
    }, 
    {
        "id": 10, 
        "region": "Southern Latin America"
    }, 
    {
        "id": 11, 
        "region": "High-income North America"
    }, 
    {
        "id": 12, 
        "region": "Caribbean"
    }, 
    {
        "id": 13, 
        "region": "Andean Latin America"
    }, 
    {
        "id": 14, 
        "region": "Central Latin America"
    }, 
    {
        "id": 15, 
        "region": "Tropical Latin America"
    }, 
    {
        "id": 16, 
        "region": "North Africa and Middle East"
    }, 
    {
        "id": 17, 
        "region": "South Asia"
    }, 
    {
        "id": 18, 
        "region": "Central Sub-Saharan Africa"
    }, 
    {
        "id": 19, 
        "region": "Eastern Sub-Saharan Africa"
    }, 
    {
        "id": 20, 
        "region": "Southern Sub-Saharan Africa"
    }, 
    {
        "id": 21, 
        "region": "Western Sub-Saharan Africa"
    }
]
;


function getRegionName(country) {
    function regionMatch(region) {
        var id = region.id;
        return id == this; 
    }    

    var region_id = country.region_id;
    var matching_region = regions.filter(regionMatch, region_id)[0];
    var region_name = matching_region.region;
    return region_name;
}


// Add markers for each country
for (var i = 0; i < countries.length; i++) {
  var country = countries[i];
  var region_name = getRegionName(country);

  var marker = L.marker([country.latitude, country.longitude]).addTo(myMap);
  marker.bindPopup(
    `<h1>${country.country}</h1><hr><h3>Region ${region_name}</h3>`
).addTo(myMap)}


  