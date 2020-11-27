var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6191798353126678,
        "pitch": -0.24439941454644298,
        "fov": 1.3664544106354668
      },
      "linkHotspots": [
        {
          "yaw": -0.15500986663502303,
          "pitch": -0.023663771237554698,
          "rotation": 0.7853981633974483,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.582811247605802,
        "pitch": 0.14822953965592234,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.9497737261074723,
          "pitch": 0.06721031229102081,
          "rotation": 0.7853981633974483,
          "target": "2-ground-floor-corridor"
        },
        {
          "yaw": -2.0736295678738337,
          "pitch": 0.11806425235198148,
          "rotation": 6.283185307179586,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ground-floor-corridor",
      "name": "Ground Floor Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.8176734265322665,
        "pitch": 0.02451962159839738,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.942656827133117,
          "pitch": -0.3248962523419969,
          "rotation": 0.7853981633974483,
          "target": "10-1st-floor-corridor"
        },
        {
          "yaw": 2.889211558397662,
          "pitch": -0.13802068974014503,
          "rotation": 17.27875959474387,
          "target": "5-lounge"
        },
        {
          "yaw": 2.893433080386531,
          "pitch": 0.001940958610042287,
          "rotation": 5.497787143782138,
          "target": "9-dining-room"
        },
        {
          "yaw": -2.652040405302751,
          "pitch": -0.01440387123522946,
          "rotation": 1.5707963267948966,
          "target": "4-room-24"
        },
        {
          "yaw": -2.7419946136102276,
          "pitch": -0.013369695187671837,
          "rotation": 4.71238898038469,
          "target": "3-room-5"
        },
        {
          "yaw": -1.0683356092524185,
          "pitch": -0.006600591940557621,
          "rotation": 6.283185307179586,
          "target": "1-reception"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.0295679606457595,
          "pitch": -0.0883752651451637,
          "title": "Main Office",
          "text": "The office space used by the manager of the home"
        }
      ]
    },
    {
      "id": "3-room-5",
      "name": "Room 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.54762655677753,
        "pitch": 0.012181297014382864,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.5513644231930357,
          "pitch": -0.059165819319151325,
          "rotation": 1.5707963267948966,
          "target": "2-ground-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-room-24",
      "name": "Room 24",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.3378307137072802,
        "pitch": 0.0409327173012457,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.10577977365856661,
          "pitch": -0.09233233348716574,
          "rotation": 4.71238898038469,
          "target": "2-ground-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lounge",
      "name": "Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08755084485443376,
          "pitch": -0.2060768544576348,
          "rotation": 1.5707963267948966,
          "target": "8-kitchen"
        },
        {
          "yaw": -0.3046974976980241,
          "pitch": -0.05103657796294314,
          "rotation": 4.71238898038469,
          "target": "2-ground-floor-corridor"
        },
        {
          "yaw": 2.2753736751572458,
          "pitch": -0.042970090177785636,
          "rotation": 11.780972450961727,
          "target": "6-activity-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-activity-room",
      "name": "Activity Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.761760956008434,
        "pitch": 0.16377077097126147,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.740791798706443,
          "pitch": 0.08819419457730149,
          "rotation": 7.853981633974483,
          "target": "5-lounge"
        },
        {
          "yaw": 1.852335972919441,
          "pitch": 0.035747295905226295,
          "rotation": 10.995574287564278,
          "target": "7-garden"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6187208140670055,
          "pitch": 0.7560885311138676,
          "title": "Interactive Table",
          "text": "Interactive projections activity for the residents"
        }
      ]
    },
    {
      "id": "7-garden",
      "name": "Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.3357895512557132,
        "pitch": 0.10071628378405606,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.0005317186600546,
          "pitch": 0.08121769291946812,
          "rotation": 17.27875959474387,
          "target": "6-activity-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.533858209279364,
        "pitch": 0.31799036000837333,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.404204906178734,
          "pitch": 0.21964011893684798,
          "rotation": 36.91371367968008,
          "target": "5-lounge"
        },
        {
          "yaw": -0.12725464065378134,
          "pitch": 0.011667448918016632,
          "rotation": 0,
          "target": "9-dining-room"
        },
        {
          "yaw": -2.4021450021919506,
          "pitch": 0.13091238592571308,
          "rotation": 0,
          "target": "8-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-dining-room",
      "name": "Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.4567629450352584,
        "pitch": 0.3745838533126076,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.239414065519405,
          "pitch": 0.03936482461396906,
          "rotation": 5.497787143782138,
          "target": "2-ground-floor-corridor"
        },
        {
          "yaw": 1.2374153664847434,
          "pitch": 0.15458864404745043,
          "rotation": 10.995574287564278,
          "target": "8-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-1st-floor-corridor",
      "name": "1st Floor Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.942039274078544,
        "pitch": -0.06699713357915549,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.9955753332879222,
          "pitch": -0.06308810976898549,
          "rotation": 8.63937979737193,
          "target": "2-ground-floor-corridor"
        },
        {
          "yaw": -2.2471311453171907,
          "pitch": -0.016186675980080167,
          "rotation": 0.7853981633974483,
          "target": "11-room-26"
        },
        {
          "yaw": 1.1000386924748717,
          "pitch": -0.018461217669120344,
          "rotation": 5.497787143782138,
          "target": "12-room-15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-room-26",
      "name": "Room 26",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.9973226775056219,
        "pitch": 0.18246799009095582,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.6098731952403433,
          "pitch": -0.05801420190797657,
          "rotation": 1.5707963267948966,
          "target": "10-1st-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-room-15",
      "name": "Room 15",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2627492471278927,
        "pitch": 0.3307189992726709,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.2031894975204462,
          "pitch": 0.12348270316243948,
          "rotation": 10.995574287564278,
          "target": "10-1st-floor-corridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
