const visual_console = document.getElementById("visualizer");
const visual_context = visual_console.getContext('2d');

visual_console.width = 800;
visual_console.height = 400;

class Sort_Visualizer_Board {
    constructor() {
        this.height = visual_console.height;
        this.width = visual_console.width;
        this.num_array = [];
        this.num_numbers = 20;
        this.default_size = 20;
        this.default_spacing = 4;
    }

    initiate_random_array(){
        for (let i = 0; i < this.num_numbers; i++){
            this.num_array.push(Math.random() * this.height); 
        }
    }

    display_numbers() {
        // if number of blocks including spacing would get out of screen then decrease block size
        // display number as height
        // have to display in center
        let offset_per_block = this.default_size + this.default_spacing;
        let middle_index = Math.floor(this.num_array.length / 2);
        let initial_position = (this.width / 2) - middle_index * offset_per_block;
        visual_context.fillStyle = "lightblue";
        for (let i = 0; i < this.num_array.length; i++){
            visual_context.fillRect(initial_position, visual_console.height, this.default_size, -this.num_array[i]);
            visual_context.strokeRect(initial_position, visual_console.height, this.default_size, -this.num_array[i]);
            initial_position += offset_per_block;
        }
    }
}

const sort_visualizer = new Sort_Visualizer_Board();
sort_visualizer.initiate_random_array();
sort_visualizer.display_numbers();