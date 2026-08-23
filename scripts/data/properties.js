const properties = [{
  id: 1,
  name: 'Luxury Mansion',
  image: 'pictures/villa 85m pics/Modern_house_profile_infinity_pool_202607170417.jpeg',
  rating: '★★★★★',
  price: 'KSH 85,000,000',
  location: 'Muthaiga, Nairobi',
  parkings: '4',
  bedrooms: '7',
  bathrooms: '8',
  land: '1.2',
  features: [ 
    '✔ Swimming Pool',
    '✔ Home Theatre',
    '✔ Gym',
    '✔ Landscaped Garden',
    '✔ Staff Quarters',
    '✔ CCTV',
    '✔ Backup Generator'
  ],
  gallery: [
    'pictures/Muthaiga- 85M.jpg',
    'pictures/villa 85m pics/Interior_view_modern_house_infin…_202607181248.jpeg',
    'pictures/villa 85m pics/Luxurious_modern_bedroom_minimal…_2K_202607181248.jpeg',
    'pictures/villa 85m pics/Luxurious_modern_kitchen_minimal…_2K_202607181249.jpeg',
    'pictures/villa 85m pics/Luxurious_modern_living_room_ope…_202607181248.jpeg',
    'pictures/villa 85m pics/Luxurious_modern_master_bathroom_2K_202607181256.jpeg'
  ],
  mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33388.75484762102!2d36.81694827280059!3d-1.2493900593342693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17abe5165e21%3A0xe007b83139657671!2sMuthaiga%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1784372043347!5m2!1sen!2ske'
},{
  id: 2,
  image: 'pictures/beachfront 68M/hero-image.jpeg',
  name: 'Beachfront Villa',
  rating: '★★★★★',
  price: 'KSH 68,000,000',
  location: 'Diani, Kwale',
  parkings: '4',
  bedrooms: '6',
  bathrooms: '6',
  land: '0.8',
  features: [ 
    "✔ Direct Beach Access",
    "✔ Infinity Swimming Pool",
    "✔ Modern Gourmet Kitchen",
    "✔ Home Office",
    "✔ Ocean View Balconies",
    "✔ Landscaped Tropical Garden",
    "✔ Backup Generator",
    "✔ Solar Water Heating",
    "✔ High-Speed Fibre Internet",
    "✔ CCTV & Electric Fence",
    "✔ Staff Quarters",
    "✔ Walk-in Closets"
  ],
  gallery: [
    
    'pictures/beachfront 68M/living-room.jpeg',
    'pictures/beachfront 68M/kitchen.jpeg',
    'pictures/beachfront 68M/master-bedroom.jpeg',
    'pictures/beachfront 68M/staircase-chandalier.jpeg',
    'pictures/beachfront 68M/balcony-view.jpeg',
    'pictures/beachfront 68M/bathroom.jpeg'
  ],
  mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75704.06641021033!2d39.55098634526987!3d-4.2774624989991485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18404f7dce49c373%3A0x5eac90afe5baa0c!2sDiani!5e0!3m2!1sen!2ske!4v1784391658664!5m2!1sen!2ske'
},{
  id: 3,
  image: 'pictures/executive 52M/exterior.jpeg',
  name: 'Executive Villa',
  rating: '★★★★☆',
  price: 'KSH 52,000,000',
  location: 'Karen, Nairobi',
  parkings: '3',
  bedrooms: '5',
  bathrooms: '5',
  land: '0.6',
  features: [
    "✔ Modern Open-Plan Kitchen",
    "✔ Spacious Family Lounge",
    "✔ Formal Dining Area",
    "✔ Backup Generator",
    "✔ Solar Water Heating",
    "✔ Electric Fence & CCTV",
  ],
  gallery: [
    'pictures/executive 52M/dining-room.jpeg',
    'pictures/executive 52M/bedroom.jpeg',
    'pictures/executive 52M/living-room.jpeg',
    'pictures/executive 52M/kitchen.jpeg',
    'pictures/executive 52M/bathroom.jpeg',
    'pictures/executive 52M/parking-and-gate.jpeg'
  ],
   mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127640.13498733554!2d36.64564795186842!3d-1.323312303716534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1c809869d64b%3A0x199b5604a77f13f5!2sKaren%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1784394062587!5m2!1sen!2ske'
  
},{
  id: 4,
  image: 'pictures/contemporary 45M/exterior.jpeg',
  name: 'Contemporary Villa',
  rating: '★★★★☆',
  price: 'KSH 45,000,000',
  location: 'Runda, Nairobi',
  parkings: '3',
  bedrooms: '5',
  bathrooms: '5',
  land: '0.5',
  features: [
    "✔ Open-Concept Living Area",
    "✔ Designer Kitchen with Island",
    "✔ Floor-to-Ceiling Windows",
    "✔ Private Rooftop Terrace",
    "✔ Landscaped Garden",
    "✔ Smart Home Automation",
    "✔ Backup Generator",
    "✔ Solar Water Heating",
    "✔ High-Speed Fibre Internet",
    "✔ Electric Fence & CCTV",
    "✔ Walk-in Closet"
  ],
  gallery: [
    'pictures/contemporary 45M/walking-closet.jpeg',
    'pictures/contemporary 45M/exterior.jpeg',
    'pictures/contemporary 45M/living-room.jpeg',
    'pictures/contemporary 45M/bedroom.jpeg',
    'pictures/contemporary 45M/bathroom.jpeg',
    'pictures/contemporary 45M/dining.jpeg',
  ],
  mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31911.383939110794!2d36.818261850000006!3d-1.2138367000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17cf7af4e5a3%3A0x46ae070c58675d4b!2sRunda%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1784396168232!5m2!1sen!2ske'
},{
  id: 5,
  image: 'pictures/townhouse 38M/exterior.jpeg',
  name: 'Luxury Townhouse',
  price: 'KSH 38,000,000',
  rating: '★★★★☆',
  location: 'Lavington, Nairobi',
  parkings: '2',
  bedrooms: '4',
  bathrooms: '4',
  land: '0.4',
  features: [
    "✔ Gated Community",
    "✔ Spacious Open-Plan Living Room",
    "✔ Modern Kitchen with Pantry",
    "✔ Private Backyard Garden",
    "✔ Family TV Lounge",
    "✔ Backup Water Supply",
    "✔ Solar Water Heating",
    "✔ High-Speed Fibre Internet",
    "✔ 24/7 Security & CCTV",
    "✔ Children's Play Area",
    "✔ Visitor Parking"
  ],
  gallery: [
    'pictures/townhouse 38M/kitchen.jpeg',
    'pictures/townhouse 38M/bedroom.jpeg',
    'pictures/townhouse 38M/bathroom.jpeg',
    'pictures/townhouse 38M/street-view.jpeg',
    'pictures/townhouse 38M/living-room.jpeg',
    'pictures/townhouse 38M/staircase.jpeg',
  ],
  mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37948.290497824055!2d36.78038860602266!3d-1.2800331547837926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19f7e205e1d1%3A0x8ec37f283d52eb04!2sLavington%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1785018023534!5m2!1sen!2ske'
},{
  id: 6,
  image: 'pictures/penthouse 32M/exterior.jpeg',
  name: 'Penthouse Apartment',
  rating: '★★★★★',
  price: 'KSH 32,000,000',
  location: 'Westlands, Nairobi',
  parkings: '1',
  bedrooms: '4',
  bathrooms: '4',
  features: [
    "✔ Designer Open-Plan Kitchen",
    "✔ Smart Home Automation",
    "✔ Private Lift Access",
    "✔ Backup Generator",
    "✔ CCTV & 24/7 Security",
    "✔ Entertainment Lounge",
    "✔ High-Speed Fibre Internet",
    "✔ Panoramic City Skyline Views"
  ],
  gallery:[
    'pictures/penthouse 32M/rooftop.jpeg',
    'pictures/penthouse 32M/workspace.jpeg',
    'pictures/penthouse 32M/bedroom.jpeg',
    'pictures/penthouse 32M/bathroom.jpeg',
    'pictures/penthouse 32M/kitchen.jpeg',
    'pictures/penthouse 32M/living-room.jpeg',
  ],
  mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364476011086!2d36.8100287!3d-1.2681246999999944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1785018104515!5m2!1sen!2ske'
},{
  id: 7,
  name: 'Modern Villa',
  image: 'pictures/modern villa 25M/exterior.jpeg',
  price: 'KSH 25M',
  rating: '★★★☆☆',
  location: 'Kilimani, Nairobi',
  parkings: '3',
  bedrooms: '4',
  bathrooms: '3',
  land: '0.75',
  features: [
    "✔ Double Volume Living Room",
    "✔ Modern Open-Plan Kitchen",
    "✔ Solar Water Heating",
    "✔ Backup Generator",
    "✔ CCTV & Electric Fence",
    "✔ Staff Quarters"
  ],
  gallery:[
    'pictures/modern villa 25M/kitchen.jpeg',
    'pictures/modern villa 25M/bedroom.jpeg',
    'pictures/modern villa 25M/living-room.jpeg',
    'pictures/modern villa 25M/bathroom.jpeg',
    'pictures/modern villa 25M/exterior.jpeg',
    'pictures/modern villa 25M/rooftop.jpeg',
  ],
  mapLocation:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31910.512856424386!2d36.797299499999994!3d-1.2855327999999964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a0dfd90fa55%3A0x37f5057a6f21bc7c!2sKilimani%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1785018147519!5m2!1sen!2ske'
},{
  id: 8,
  image:'pictures/family-home 20M/exterior.jpeg',
  name: 'Country Family Home',
  rating: '★★★★☆',
  price: 'KSH 20,000,000',
  location: 'Ruiru, Kiambu',
  parkings: '2',
  bedrooms: '4',
  bathrooms: '3',
  land: '0.5',
  features: [
    "✔ Spacious Living Room",
    "✔ Modern Kitchen",
    "✔ Dining Area",
    "✔ Master Ensuite",
    "✔ Private Backyard",
    "✔ Laundry Area",
    "✔ Perimeter Wall",
    "✔ Cabro Parking",
    "✔ Children's Play Area",
    "✔ Borehole Water Supply",
    "✔ Solar Water Heating",
    "✔ 24/7 Gated Community Security"
  ],
  gallery:[
    'pictures/family-home 20M/laundry.jpeg',
    'pictures/family-home 20M/staircase.jpeg',
    'pictures/family-home 20M/office.jpeg',
    'pictures/family-home 20M/living-room.jpeg',
    'pictures/family-home 20M/bedroom.jpeg',
    'pictures/family-home 20M/bathroom.jpeg',
  ],
  mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127648.30582652555!2d37.013276200000014!3d-1.153663400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f38a78cb4e50d%3A0xdaa7fad9c2cbf0fb!2sRuiru!5e0!3m2!1sen!2ske!4v1785018213811!5m2!1sen!2ske'
},{
  id: 9,
  image: 'pictures/family home.jpg',
  name: 'Family Home',
  rating:  '★★★★☆',
  price: 'KSH 18,000,000',
  location: 'Syokimau, Machakos',
  parkings: '2',
  bedrooms: '4',
  bathrooms: '3',
  land: '0.3',
  features:[
    "✔ Spacious Family Lounge",
    "✔ Modern Fitted Kitchen",
    "✔ Separate Dining Area",
    "✔ Master Ensuite Bedroom",
    "✔ Private Backyard",
    "✔ Laundry Area",
    "✔ Cabro Parking",
    "✔ Perimeter Wall",
    "✔ Solar Water Heating",
    "✔ Fibre Internet Ready",
    "✔ Children's Play Area",
    "✔ 24/7 Gated Community Security"
  ],
  gallery: [
    'pictures/family-home 18M/kitchen.jpeg',
    'pictures/family-home 18M/bedroom.jpeg',
    'pictures/family-home 18M/office.jpeg',
    'pictures/family-home 18M/living-room.jpeg',
    'pictures/family-home 18M/store-room.jpeg',
    'pictures/family-home 18M/bathroom.jpeg',
  ],
  mapLocation:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.50707971202!2d36.93909289999999!3d-1.3636349499999896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d24b9c0dc3f%3A0x9c8709c3154086ca!2sSyokimau%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1785018262326!5m2!1sen!2ske'
},{
  id: 10,
  image:  'pictures/bungalow 16M/exterior.jpg',
  name: 'Contemporary Bungalow',
  rating:  '★★★★☆',
  price: 'KSH 16,000,000',
  location: 'Kitengela, Kajiado',
  parkings: '2',
  bedrooms: '3',
  bathrooms: '3',
  features: [
    "✔ Open-Concept Living & Dining Area",
    "✔ Modern Fitted Kitchen",
    "✔ Master Ensuite Bedroom",
    "✔ Laundry Area",
    "✔ Solar Water Heating",
    "✔ Borehole Water Supply",
    "✔ Fibre Internet Ready",
    "✔ 24/7 Gated Community Security"
  ],
  gallery: [
    'pictures/bungalow 16M/sunroom.jpeg',
    'pictures/bungalow 16M/living-room.jpeg',
    'pictures/bungalow 16M/kitchen.jpeg',
    'pictures/bungalow 16M/library.jpeg',
    'pictures/bungalow 16M/bedroom.jpeg',
    'pictures/bungalow 16M/bathroom.jpeg',

  ],
  mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63815.44194780703!2d36.95225995!3d-1.49229305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182fa029a32ea761%3A0x1b98a0c9cee3a824!2sKitengela!5e0!3m2!1sen!2ske!4v1785018354031!5m2!1sen!2ske'
},{
  id: 11,
  image: 'pictures/luxury apartment 12M/exterior.jpeg',
  name: 'Luxury Apartment',
  rating:  '★★★★☆',
  price: 'KSH 12,000,000',
  location: 'Westlands, Nairobi',
  bedrooms: '2',
  bathrooms: '2',
  parkings: '1',
  features: [
    "✔ Modern Designer Kitchen",
    "✔ Master Ensuite Bedroom",
    "✔ Private Balcony",
    "✔ Rooftop Infinity Pool",
    "✔ Fully Equipped Gym",
    "✔ High-Speed Elevators",
    "✔ Backup Generator",
    "✔ Borehole Water Supply",
    "✔ Fibre Internet Ready",
    "✔ CCTV & 24/7 Security",
    "✔ Residents' Lounge"
  ],
  gallery: [
    'pictures/luxury apartment 12M/living-room.jpeg',
    'pictures/luxury apartment 12M/library.jpeg',
    'pictures/luxury apartment 12M/office.jpeg',
    'pictures/luxury apartment 12M/kitchen.jpeg',
    'pictures/luxury apartment 12M/bedroom.jpeg',
    'pictures/luxury apartment 12M/exterior.jpeg'
  ],
  mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364476011086!2d36.810028700000004!3d-1.2681247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1785018403624!5m2!1sen!2ske'
},{
  id: 12,
  image: 'pictures/starter-home 9M/exterior.jpeg',
  name: 'Starter Home',
  rating: '★★★☆☆',
  price: 'KSH 9M',
  location: 'Juja, Kiambu',
  parkings: '1',
  bedrooms: '2',
  bathrooms: '2',
  land: '0.25',
  features: [
    "✔ Open-Plan Living Room",
    "✔ Modern Kitchen",
    "✔ Master Ensuite",
    "✔ Laundry Area",
    "✔ Private Front Yard",
    "✔ Perimeter Wall",
    "✔ Reliable Water Supply",
    "✔ Fibre Internet Ready",
    "✔ Children's Play Area",
    "✔ Gated Community Security"
  ],
  gallery: [
    'pictures/starter-home 9M/rooftop.jpeg',
    'pictures/starter-home 9M/living-room.jpeg',
    'pictures/starter-home 9M/dining.jpeg',
    'pictures/starter-home 9M/bedroom.jpeg',
    'pictures/starter-home 9M/exterior.jpeg',
    'pictures/starter-home 9M/bathroom.jpeg',
  ],
  mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127649.1228130807!2d37.08447765000001!3d-1.1353075000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4616a21d035d%3A0xd46c6efa3589f45f!2sJuja!5e0!3m2!1sen!2ske!4v1785018437853!5m2!1sen!2ske'
}
]

const url = new URL(window.location.href);
const propertyId = Number(url.searchParams.get('id'));
const matchingProperty = properties.find((property) => {
  return property.id  === propertyId;
  
});


document.querySelector('.js-image')
.src = matchingProperty.image;
document.querySelector('.js-name')
.textContent = matchingProperty.name;
document.querySelector('.js-rating')
.textContent = matchingProperty.rating;
document.querySelector('.js-price')
.textContent = matchingProperty.price;
document.querySelector('.js-location')
.textContent = matchingProperty.location;
document.querySelector('.js-bedrooms')
.textContent = `🛏 ${matchingProperty.bedrooms} Bedrooms`;
document.querySelector('.js-bathrooms')
.textContent = `🛁 ${matchingProperty.bathrooms} Bathrooms`
document.querySelector('.js-parkings')
.textContent = `🚗 ${matchingProperty.parkings} Parkings`;
document.querySelector('.js-land-size')
.textContent = `📐 ${matchingProperty.land} Acres`;

let featuresHTML = '';

matchingProperty.features.forEach((feature) => {
  featuresHTML += `<p>${feature}</p>`;
});
document.querySelector('.js-features')
.innerHTML = featuresHTML;

let galleryHTML = '';
matchingProperty.gallery.forEach((image) => {
  galleryHTML += `<img class="gallery-image"src="${image}">`
});

document.querySelector('.js-gallery')
.innerHTML = galleryHTML;
document.querySelector('.js-map-location')
.src = matchingProperty.mapLocation;

