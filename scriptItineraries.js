const itineraries = {
    "10-days": `
        <h2>10 DAYS BALE MOUNTAINS TREKKING</h2>
        <p><strong>DAY 1:</strong> Arrive in Addis Ababa Bole international airport, then to hotels and guest houses for overnight city activities. Getting tickets early for the next day to travel to BMNP.</p>
        <p><strong>DAY 2:</strong> Travel from Addis Ababa to Bale Mountains National Park by plane or bus. Afternoon walk around the headquarters.</p>
        <p><strong>DAY 3:</strong> Hike from Dinsho to Adele campsite (16KM).</p>
        <p><strong>DAY 4:</strong> Trek from Adele to Sodota (18KM).</p>
        <p><strong>DAY 5:</strong> Trek from Sodota to Keyrensa (20KM).</p>
        <p><strong>DAY 6:</strong> Trek from Keyrensa to Rafu (20KM).</p>
        <p><strong>DAY 7:</strong> Trek from Rafu to Garba Guracha (22KM).</p>
        <p><strong>DAY 8:</strong> Trek from Garba Guracha to Tullu Dimtu (17KM).</p>
        <p><strong>DAY 9:</strong> Drive from Sanettie Plateau to Harena Forest (35KM).</p>
        <p><strong>DAY 10:</strong> Drive to Robe Airport or bus station for departure.</p>
    `,
    "6-days": `
        <h2>6 DAYS BALE MOUNTAINS TREKKING</h2>
        <p><strong>DAY 1:</strong> Arrival to Bale Mountains. Hike around the headquarters.</p>
        <p><strong>DAY 2:</strong> Trek from Dinsho to Sodota (20KM).</p>
        <p><strong>DAY 3:</strong> Trek from Sodota to Wasema (18KM).</p>
        <p><strong>DAY 4:</strong> Trek from Wasema to Sannettie (18KM).</p>
        <p><strong>DAY 5:</strong> Drive to Harena Forest and hike.</p>
        <p><strong>DAY 6:</strong> Drive to Goba and depart.</p>
    `,
    "5-days": `
        <h2>5 DAYS TREKKING IN BALE MOUNTAINS</h2>
        <p><strong>DAY 1:</strong> Arrival to Bale Mountains National Park. Hike around the headquarters.</p>
        <p><strong>DAY 2:</strong> Trek from Dinsho to Sodota (20KM).</p>
        <p><strong>DAY 3:</strong> Trek from Sodota to Wasema (20KM).</p>
        <p><strong>DAY 4:</strong> Trek from Wasema to Sannettie (20KM).</p>
        <p><strong>DAY 5:</strong> Drive to Robe Airport for departure.</p>
    `,
    "4-days": `
        <h2>4 DAYS BALE MOUNTAINS TREKKING TOURS</h2>
        <p><strong>DAY 1:</strong> Arrival to Bale Mountains National Park. Hike around the headquarters.</p>
        <p><strong>DAY 2:</strong> Trek from Dinsho to Sodota (20KM).</p>
        <p><strong>DAY 3:</strong> Trek from Sodota to Adele (17KM).</p>
        <p><strong>DAY 4:</strong> Hike down from Adele to Dinsho (12KM).</p>
    `,
    "2-days": `
        <h2>TWO DAYS THREE NIGHTS TREKKING</h2>
        <p><strong>DAY 1:</strong> Arrival at Bale Mountains National Park. Hike to Sodota/Habera (20/14KM).</p>
        <p><strong>DAY 2:</strong> Trek from Sodota/Habera to Adele (17/14KM).</p>
        <p><strong>DAY 3:</strong> Hike down from Adele to Dinsho (12KM).</p>
    `
};

function showItinerary(id) {
    const itinerarySection = document.getElementById('itinerary');
    itinerarySection.innerHTML = itineraries[id];
}