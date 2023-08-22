import { loadFull } from "tsparticles";
import React, { useCallback } from 'react'
import Particles from 'react-tsparticles';

import './index';

function Background() {

	const particlesConfig = {
		"particles": {
				"number": {
				"value": 194,
				"density": {
						"enable": true,
						"value_area": 1104.8066982851817
				}
				},
				"color": {
				"value": "#ffffff"
				},
				"shape": {
				"type": "circle",
				"stroke": {
						"width": 0,
						"color": "#000000"
				},
				"polygon": {
						"nb_sides": 5
				},
				"image": {
						"src": "img/github.svg",
						"width": 100,
						"height": 100
				}
				},
				"opacity": {
				"value": 1,
				"random": true,
				"anim": {
						"enable": true,
						"speed": 1,
						"opacity_min": 0,
						"sync": false
				}
				},
				"size": {
				"value": 5,
				"random": true,
				"anim": {
						"enable": false,
						"speed": 4,
						"size_min": 0.3,
						"sync": false
				}
				},
				"line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
				},
				"move": {
				"enable": true,
				"speed": 1,
				"direction": "none",
				"random": true,
				"straight": false,
				"out_mode": "bounce",
				"bounce": false,
				"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 600
				}
				}
		},
		"interactivity": {
				"detect_on": "canvas",
				"events": {
				"onhover": {
						"enable": true,
						"mode": "grab"
				},
				"onclick": {
						"enable": true,
						"mode": "repulse"
				},
				"resize": true
				},
				"modes": {
				"grab": {
						"distance": 219.24838405820654,
						"line_linked": {
						"opacity": 1
						}
				},
				"bubble": {
						"distance": 250,
						"size": 0,
						"duration": 2,
						"opacity": 0,
						"speed": 3
				},
				"repulse": {
						"distance": 400,
						"duration": 0.4
				},
				"push": {
						"particles_nb": 4
				},
				"remove": {
						"particles_nb": 2
				}
				}
		},
		"retina_detect": true
	}
    
	const particlesInit = async (main) => { 
    console.log(main);
    await loadFull(main); 
	}; 
    
	const particlesLoaded = useCallback(async (container) => {
			console.log(container);
	}, []);

  return (
    <div>
			<Particles className='background-anim'
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={particlesConfig}
			/>
	</div>
  )
}

export default Background