/**
 * needs object data
 * 
 * ALL-----------------------------------------------
 * 
 * phone number links in header and footer
 * info email link in header and footer
 * Full address in footer
 * Artdept email in footer
 * any social media links in footer
 * 
 * HOME-----------------------------------------------
 * 
 * banner images
 * background image for apparel
 * 
 * CONTACT--------------------------------------------
 * 
 * Full address
 * Phone Number
 * info@email
 * artdept email
 * 
 */

const loc = {
  locName: 'Clearwater Shirt Co',
  city: 'Clearwater',
  state: 'Florida',
  stateAbv: 'FL',
  address: '2000 Calumet St',
  zip: '33765',
  phone: '727-467-5000',
  emailDomain: '@clearwatershirt.com',
};

const bannerArray = [
  'Banner-bridge.jpg',
  'Banner-hotel.jpg',
  'Banner-pier60.jpg',
  'Banner-street.jpg',
];

// EDIT NOTHING BELOW THIS LINE---------------------------------------------------


function updateInfo() {
  const phoneLink = Array.from(document.querySelectorAll('.phone-link'));
  const phoneNumber = Array.from(document.querySelectorAll('.phone-number'));
  const mailInfo = Array.from(document.querySelectorAll('.mail-info'));
  const mailArt = Array.from(document.querySelectorAll('.mail-art'));
  const address = Array.from(document.querySelectorAll('.address'));
  const locationName = Array.from(document.querySelectorAll('.location-name'));

  phoneLink.map(info => info.href = `tel:1-${loc.phone}`);
  phoneNumber.map(info => info.innerHTML = loc.phone);
  mailInfo.map((info) => {
    info.href = `mailto:info${loc.emailDomain}`;
    info.innerHTML = `info${loc.emailDomain}`;
  });
  mailArt.map((info) => {
    info.href = `mailto:artdept${loc.emailDomain}`;
    info.innerHTML = `artdept${loc.emailDomain}`;
  });
  address.map(info => info.innerHTML = `${loc.address}<br>${loc.city}, ${loc.stateAbv} ${loc.zip}`);
  locationName.map(info => info.innerHTML = `${loc.locName}`);
}
updateInfo();
