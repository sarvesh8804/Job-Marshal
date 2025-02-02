export function getFlagEmoji(location: string): string {
  const cleanLocation = location.trim().toLowerCase();

  const country = countryList.find((country) =>
    cleanLocation.includes(country.name.toLowerCase())
  );

  return country?.flagEmoji || "";
}

export const countryList = [
  {
    name: "Mumbai",
    code: "MUM",
    phoneCode: "+91-22",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Delhi",
    code: "DEL",
    phoneCode: "+91-11",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Bangalore",
    code: "BLR",
    phoneCode: "+91-80",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Chennai",
    code: "MAA",
    phoneCode: "+91-44",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Kolkata",
    code: "CCU",
    phoneCode: "+91-33",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Hyderabad",
    code: "HYD",
    phoneCode: "+91-40",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Ahmedabad",
    code: "AMD",
    phoneCode: "+91-79",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Pune",
    code: "PNQ",
    phoneCode: "+91-20",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Jaipur",
    code: "JAI",
    phoneCode: "+91-141",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Chandigarh",
    code: "CHD",
    phoneCode: "+91-172",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Lucknow",
    code: "LKO",
    phoneCode: "+91-522",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Indore",
    code: "IDR",
    phoneCode: "+91-731",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Kochi",
    code: "COK",
    phoneCode: "+91-484",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Patna",
    code: "PAT",
    phoneCode: "+91-612",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Goa",
    code: "GOI",
    phoneCode: "+91-832",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Surat",
    code: "SUR",
    phoneCode: "+91-261",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Vadodara",
    code: "BDQ",
    phoneCode: "+91-265",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Kanpur",
    code: "KNU",
    phoneCode: "+91-512",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Nagpur",
    code: "NGP",
    phoneCode: "+91-712",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Bhopal",
    code: "BHO",
    phoneCode: "+91-755",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Gurugram",
    code: "GGN",
    phoneCode: "+91-124",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Noida",
    code: "NOI",
    phoneCode: "+91-120",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Chandrapur",
    code: "CHP",
    phoneCode: "+91-7172",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Jammu",
    code: "JMU",
    phoneCode: "+91-191",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Udaipur",
    code: "UDR",
    phoneCode: "+91-294",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Shimla",
    code: "SML",
    phoneCode: "+91-177",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Mysore",
    code: "MYS",
    phoneCode: "+91-821",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Vijayawada",
    code: "VJA",
    phoneCode: "+91-866",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Tiruchirappalli",
    code: "TRZ",
    phoneCode: "+91-431",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Coimbatore",
    code: "CBE",
    phoneCode: "+91-422",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Agra",
    code: "AGR",
    phoneCode: "+91-562",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Ranchi",
    code: "RAN",
    phoneCode: "+91-651",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Raipur",
    code: "RPR",
    phoneCode: "+91-771",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Aurangabad",
    code: "AUR",
    phoneCode: "+91-240",
    flagEmoji: "🇮🇳",
  },
  {
    name: "Kolkata",
    code: "KOL",
    phoneCode: "+91-33",
    flagEmoji: "🇮🇳",
  },
];