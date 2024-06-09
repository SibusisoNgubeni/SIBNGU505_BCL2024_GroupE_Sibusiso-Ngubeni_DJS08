import { createServer, Model } from "miragejs"



export default function server() {
  return (
    createServer({
        models: {
            vans: Model,
        },
    
        seeds(server) {
            server.create("van", { 
                id: "1", 
                name: "Hybrid+ HP18X 18″ ", 
                price: 10000, 
                description: "HYBRID+ HP218 DUAL BASS BIN DESCRIPTION Dual 18 High-Power Sub-Bass CELTO Acoustic Loaded Heavily Braced Birch-Ply & Ultratex (USA) Textured Black", 
                imageUrl: "https://audiopro.co.za/wp-content/uploads/2020/02/002_SUB-8006-AS-LEFT-GRILL_gallery-2-600x600.jpg", 
                type: "simple" })
                                            
            server.create("van", { 
                id: "2", 
                name: "RCF SUB9006AS  ACTIVE VENTED", 
                price: 80000, 
                description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", 
                imageUrl: "https://audiopro.co.za/wp-content/uploads/2020/02/000_SUB-9006-AS-LEFT_gallery-600x600.png", 
                type: "rugged" })
    
            server.create("van", { 
                id: "3", 
                name: "AUDIOCENTER SA3218 Dual 18", 
                price: 100, 
                description: "The SA3218 is a powerful dual 18″ subwoofer which compliments the SA series of active speakers by Audiocenter.  With 4,000W peak power, capable of putting out a thunderous 140dB peak SPL, there are 3 low-pass filters (80Hz, 100Hz, 120Hz) available, multiple protection systems, and a phase switch.3 low-pass filters (80Hz, 100Hz, 120Hz) in SA3218 are available to choose according to different venues and music styles.", 
                imageUrl: "https://audiopro.co.za/wp-content/uploads/2019/10/391-600x600.jpg", 
                type: "luxury" })
    
            server.create("van", { 
                id: "4", 
                name: "Celto Acoustique SU218TL", 
                price: 65000,  
                description: "Rear Loaded Transmission Line subwoofer Down to 26Hz and still 104dB/1W/1m Efficiency Real 3000W RMS power capacity Premium 18” LF drivers with massive ±15mm linear XmaxTriple forced cooling system for low power compression Heavy braced cabinet for vibration free dynamic response", 
                imageUrl: "https://aragencies.co.za/cdn/shop/products/1258_720x720.jpg?v=1615993403", 
                type: "simple" })
    
            server.create("van", { 
                id: "5", 
                name: "Cat King M8.2", 
                price: 12000, 
                description: "Rated Impedance: 4Ohm Operation Mode: Passive Power AES/Peak: 1600W/3200W Available Frequency Response: 45Hz- 250Hz Max Sound Pressure Level: 98±3dB LF Size: 2x 18", 
                imageUrl: "https://aragencies.co.za/cdn/shop/products/m2.8_720x433.jpg?v=1680984589",  
                type: "luxury" })
    
            server.create("van", { 
                id: "6", 
                name: "Imix im221bs dual bass bin", 
                price: 70000, 
                description: "IMIX IM221BS DUAL 21 inch FULL RANGE LOUD SPEAKER 1400W/RMS LF:18 X2, SENSITIVITY(1W /1M ), 134dB FREQUENCY RESPONSE: 30Hz- 250KHz, 18MM MDF BOARD.", 
                imageUrl: "https://www.speakerlinearray.com/photo/pc8407082-bass_bin_speakers_with_subwoofer_2000_watt_line_array_subwoofer_dj_sound_equipment.jpg", 
                type: "rugged" })
        },
    
        routes() {
            this.namespace = "api"
            this.logging = false
    
            this.get("/vans", (schema, request) => {
                return schema.vans.all()
            })
            
            this.get("/vans/:id", (schema, request) => {
                const id = request.params.id
                return schema.vans.find(id)
            })
        }
    })
  )
}
 