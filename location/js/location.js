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
    locName: 'Chicago',
    city: 'Chicago',
    state: 'Illinois',
    stateAbv: 'IL',
    address: '1060 W Addison St',
    zip: '60613',
    phone: '727-479-3825',
    emailDomain: '@someothersite.com',
}

function updateInfo(){

    const phoneLink = Array.from(document.querySelectorAll('.phone-link'));
    const phoneNumber = Array.from(document.querySelectorAll('.phone-number'));
    const mailInfo = Array.from(document.querySelectorAll('.mail-info'));
    const mailArt = Array.from(document.querySelectorAll('.mail-art'));
    const address = Array.from(document.querySelectorAll('.address'));
 
    phoneLink.map(info => info.href = `tel:${loc.phone}`);
    phoneNumber.map(info => info.innerHTML = loc.phone);
    mailInfo.map(info => {
        info.href = `mailto:info${loc.emailDomain}`;
        info.innerHTML = `info${loc.emailDomain}`;
    });
    mailArt.map(info => {
        info.href = `mailto:artdept${loc.emailDomain}`;
        info.innerHTML = `artdept${loc.emailDomain}`;
    });
    address.map(info => info.innerHTML = `${loc.address}<br>${loc.city}, ${loc.stateAbv} ${loc.zip}`);
    

}








