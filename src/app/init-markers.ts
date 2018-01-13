export class init {
    load() {
        if (localStorage.getItem("markers") == null) {
            console.log("No marker found...Creating markers");

            let markers =  [
                {
                    name: "Device 1",
                    lat: 12.971599,
                    lng: 77.594563,
                    draggable: true
                },
                {
                    name: "Device 2",
                    lat: 12.839939,
                    lng: 77.677003,
                    draggable: true
                },
                {
                    name: "Device 3",
                    lat: 12.908136,
                    lng: 77.647608,
                    draggable: true
                },
            ]

            localStorage.setItem('markers', JSON.stringify(markers));
        } else {
            console.log("Loading markers...");
        }   
    }
}