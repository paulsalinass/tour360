TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F",
  "thumbnailUrl": "media/panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "01 VISTA AEREA SUPERIOR",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_6963BAB8_629E_2CD3_41D2_DA7846D26199",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 69,
           "width": 200,
           "url": "media/panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "yaw": -2.53,
        "hfov": 84.68,
        "pitch": -21.62
       }
      ],
      "items": [
       {
        "yaw": -2.53,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 84.68,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 414,
           "width": 1187,
           "url": "media/panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -21.62
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_6E9CD2E2_629E_7C77_41D5_68D7FD288462",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389, this.camera_8F0DF074_9C45_9F55_41AF_B8586FCB78A1); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 57,
           "width": 48,
           "url": "media/panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": 1.22,
        "hfov": 8.51,
        "pitch": -5.86
       }
      ],
      "items": [
       {
        "yaw": 1.22,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 115,
           "width": 97,
           "url": "media/panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -5.86
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_90203C8D_9C3D_87B2_41D0_3BAFD1A9DBA1",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 65,
           "width": 68,
           "url": "media/panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "yaw": 76.93,
        "hfov": 11.96,
        "pitch": 0.87
       }
      ],
      "items": [
       {
        "yaw": 76.93,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.96,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 130,
           "width": 136,
           "url": "media/panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 0.87
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_90195A1D_9C3C_82D2_41D3_464435A761FB",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 68,
           "width": 85,
           "url": "media/panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "yaw": 39.81,
        "hfov": 15.05,
        "pitch": 1.74
       }
      ],
      "items": [
       {
        "yaw": 39.81,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 137,
           "width": 171,
           "url": "media/panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_0_HS_3_0.png"
          }
         ]
        },
        "pitch": 1.74
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_97E53C2E_9C3F_86CE_41C3_C29BA236C8CE",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 70,
           "width": 89,
           "url": "media/panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "yaw": 116.49,
        "hfov": 15.67,
        "pitch": -1.56
       }
      ],
      "items": [
       {
        "yaw": 116.49,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.67,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 141,
           "width": 178,
           "url": "media/panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_0_HS_4_0.png"
          }
         ]
        },
        "pitch": -1.56
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F.jpeg"
      }
     ]
    }
   }
  ],
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389",
     "thumbnailUrl": "media/panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_t.jpg",
     "pitch": 0,
     "class": "Panorama",
     "label": "1_10 - Panorama",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_6E48FD0B_629E_25B6_41C4_8FCD886092A1",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 134,
              "width": 134,
              "url": "media/panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": -46.89,
           "hfov": 14.45,
           "pitch": -16.9
          }
         ],
         "items": [
          {
           "yaw": -46.89,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 14.45,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 269,
              "width": 269,
              "url": "media/panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -16.9
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_6F10F7B2_62A2_E4D1_41D8_2D0C52A0B0AA",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 90,
              "width": 200,
              "url": "media/panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_0_HS_1_1_0_map.gif"
             }
            ]
           },
           "yaw": -51.28,
           "hfov": 40.12,
           "pitch": -21.6
          }
         ],
         "items": [
          {
           "yaw": -51.28,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 40.12,
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 338,
              "width": 747,
              "url": "media/panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -21.6
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_97D29519_9C3C_86D2_41DF_E671034F425A",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 151,
              "width": 200,
              "url": "media/panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "yaw": 100.56,
           "hfov": 93.51,
           "pitch": 22.44
          }
         ],
         "items": [
          {
           "yaw": 100.56,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 93.51,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 1374,
              "width": 1808,
              "url": "media/panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_0_HS_2_0.png"
             }
            ]
           },
           "pitch": 22.44
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_900EB083_9C3C_7FB6_41A8_075FB0B9CF43",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 200,
              "url": "media/panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "yaw": -93.19,
           "hfov": 42.58,
           "pitch": 27.77
          }
         ],
         "items": [
          {
           "yaw": -93.19,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 42.58,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 860,
              "width": 860,
              "url": "media/panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_0_HS_3_0.png"
             }
            ]
           },
           "pitch": 27.77
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_90DD97C9_9C44_81B2_41E0_FE86D8106C27",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F, this.camera_8F078083_9C45_9FB3_41C1_B61B5BC1B075); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 137,
              "url": "media/panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "yaw": 0.12,
           "hfov": 19.48,
           "pitch": 23.73
          }
         ],
         "items": [
          {
           "yaw": 0.12,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 19.48,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 553,
              "width": 380,
              "url": "media/panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_0_HS_4_0.png"
             }
            ]
           },
           "pitch": 23.73
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389.jpeg"
         }
        ]
       }
      }
     ],
     "hfov": 360,
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F",
       "backwardYaw": 1.22,
       "yaw": 0.12,
       "distance": 1
      }
     ]
    },
    "backwardYaw": 0.12,
    "yaw": 1.22,
    "distance": 1
   }
  ]
 },
 {
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "partial": false,
  "id": "panorama_5516D2E0_5C95_054F_41D1_AA7E2C7241E2",
  "thumbnailUrl": "media/panorama_5516D2E0_5C95_054F_41D1_AA7E2C7241E2_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "1. ESQUINA INICIO",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_6F3D8E88_62A3_E4B2_41D3_F449F3C9C147",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 143,
           "width": 179,
           "url": "media/panorama_5516D2E0_5C95_054F_41D1_AA7E2C7241E2_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": -14.27,
        "hfov": 20.11,
        "pitch": 0.91
       }
      ],
      "items": [
       {
        "yaw": -14.27,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 20.11,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 286,
           "width": 359,
           "url": "media/panorama_5516D2E0_5C95_054F_41D1_AA7E2C7241E2_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 0.91
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_6D6C28CA_62A2_ECB1_41C4_BE63CFA98ECE",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 96,
           "width": 200,
           "url": "media/panorama_5516D2E0_5C95_054F_41D1_AA7E2C7241E2_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "yaw": -14.47,
        "hfov": 28.58,
        "pitch": -1.24
       }
      ],
      "items": [
       {
        "yaw": -14.47,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 28.58,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 253,
           "width": 521,
           "url": "media/panorama_5516D2E0_5C95_054F_41D1_AA7E2C7241E2_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -1.24
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_5516D2E0_5C95_054F_41D1_AA7E2C7241E2_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_5516D2E0_5C95_054F_41D1_AA7E2C7241E2_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_5516D2E0_5C95_054F_41D1_AA7E2C7241E2.jpeg"
      }
     ]
    }
   }
  ],
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5516D2E0_5C95_054F_41D1_AA7E2C7241E2_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "partial": false,
  "id": "panorama_554AB742_5C95_0B53_41CD_66B67DBA2D79",
  "thumbnailUrl": "media/panorama_554AB742_5C95_0B53_41CD_66B67DBA2D79_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "2. ARBOL",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_6C89460E_62A1_E7B1_41CF_9A2EA97D6393",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 113,
           "width": 200,
           "url": "media/panorama_554AB742_5C95_0B53_41CD_66B67DBA2D79_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": -26.9,
        "hfov": 43.52,
        "pitch": 1.13
       }
      ],
      "items": [
       {
        "yaw": -26.9,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 43.52,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 441,
           "width": 778,
           "url": "media/panorama_554AB742_5C95_0B53_41CD_66B67DBA2D79_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 1.13
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_6D649CAC_62A6_24F1_41B6_565C0F8AE939",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 104,
           "width": 200,
           "url": "media/panorama_554AB742_5C95_0B53_41CD_66B67DBA2D79_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "yaw": -31.47,
        "hfov": 44.67,
        "pitch": -0.85
       }
      ],
      "items": [
       {
        "yaw": -31.47,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 44.67,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 439,
           "width": 841,
           "url": "media/panorama_554AB742_5C95_0B53_41CD_66B67DBA2D79_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -0.85
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_554AB742_5C95_0B53_41CD_66B67DBA2D79_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_554AB742_5C95_0B53_41CD_66B67DBA2D79_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_554AB742_5C95_0B53_41CD_66B67DBA2D79.jpeg"
      }
     ]
    }
   }
  ],
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_554AB742_5C95_0B53_41CD_66B67DBA2D79_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38",
  "thumbnailUrl": "media/panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "4. FACHADA VIVIENDA",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_6C000D92_62A6_64D1_41CB_06F138780A21",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 118,
           "width": 147,
           "url": "media/panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": -0.05,
        "hfov": 16.33,
        "pitch": -8.22
       }
      ],
      "items": [
       {
        "yaw": -0.05,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 237,
           "width": 294,
           "url": "media/panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -8.22
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_6D02BDC1_62A6_64B3_41C6_9C97CE5BB3DC",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9, this.camera_8F2DA0A0_9C45_9FED_41D7_D71144B594ED); this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 75,
           "url": "media/panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "yaw": -0.5,
        "hfov": 12.94,
        "pitch": -5.91
       }
      ],
      "items": [
       {
        "yaw": -0.5,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.94,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 617,
           "width": 232,
           "url": "media/panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -5.91
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_907830C2_9C47_9FB6_41E2_05F5B288A734",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 179,
           "width": 145,
           "url": "media/panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "yaw": -88.75,
        "hfov": 14.28,
        "pitch": 28.88
       }
      ],
      "items": [
       {
        "yaw": -88.75,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.28,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 358,
           "width": 291,
           "url": "media/panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 28.88
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38.jpeg"
      }
     ]
    }
   }
  ],
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9",
     "thumbnailUrl": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_t.jpg",
     "pitch": 0,
     "class": "Panorama",
     "label": "SALA-2",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_6DF1884B_62A6_6BB7_41C3_CBEF1E877876",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38, this.camera_8F13E092_9C45_9FAD_41DB_A3E9F08928EE); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 200,
              "url": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_0_HS_0_1_2_map.gif"
             }
            ]
           },
           "yaw": -180,
           "hfov": 90,
           "pitch": 0
          },
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 200,
              "url": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_0_HS_0_2_3_map.gif"
             }
            ]
           },
           "yaw": -90,
           "hfov": 90,
           "pitch": 0
          },
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 200,
              "url": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_0_HS_0_3_4_map.gif"
             }
            ]
           },
           "yaw": 0,
           "hfov": 90,
           "pitch": 90
          },
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 200,
              "url": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_0_HS_0_4_5_map.gif"
             }
            ]
           },
           "yaw": 0,
           "hfov": 90,
           "pitch": -90
          }
         ],
         "items": [
          {
           "yaw": -180,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 90,
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 1300,
              "width": 1300,
              "url": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_0_HS_0_00002.png"
             }
            ]
           },
           "pitch": 0
          },
          {
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 1300,
              "width": 1300,
              "url": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_0_HS_0_00003.png"
             }
            ]
           },
           "yaw": -90,
           "hfov": 90,
           "pitch": 0
          },
          {
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 1300,
              "width": 1300,
              "url": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_0_HS_0_00004.png"
             }
            ]
           },
           "yaw": 0,
           "hfov": 90,
           "pitch": 90
          },
          {
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 1300,
              "width": 1300,
              "url": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_0_HS_0_00005.png"
             }
            ]
           },
           "yaw": 0,
           "hfov": 90,
           "pitch": -90
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_72349480_62A2_24B1_41BD_1C92755AFF42",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 72,
              "url": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_0_HS_1_1_6_map.gif"
             }
            ]
           },
           "yaw": 83.53,
           "hfov": 12.66,
           "pitch": -3.6
          }
         ],
         "items": [
          {
           "yaw": 83.53,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 12.66,
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 621,
              "width": 227,
              "url": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -3.6
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_6D5A06BC_62A2_24D1_41D2_94EA4E03E946",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 9)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 125,
              "width": 165,
              "url": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_0_HS_2_0_6_map.gif"
             }
            ]
           },
           "yaw": 78.84,
           "hfov": 14.12,
           "pitch": -40.19
          }
         ],
         "items": [
          {
           "yaw": 78.84,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 14.12,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 250,
              "width": 330,
              "url": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -40.19
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9.jpeg"
         }
        ]
       }
      }
     ],
     "hfov": 360,
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38",
       "backwardYaw": -0.5,
       "yaw": -92.99,
       "distance": 1
      }
     ]
    },
    "backwardYaw": -92.99,
    "yaw": -0.5,
    "distance": 1
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_5517CD86_5C93_1FC8_41D1_51B034B82DAC",
  "thumbnailUrl": "media/panorama_5517CD86_5C93_1FC8_41D1_51B034B82DAC_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "Patio 2",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_757DEF30_629E_25E9_41D3_1B66A937DAD8",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC, this.camera_8F39B0A6_9C45_9FF5_41DA_9D39CF269B3B); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 199,
           "width": 74,
           "url": "media/panorama_5517CD86_5C93_1FC8_41D1_51B034B82DAC_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "yaw": -82.68,
        "hfov": 26.33,
        "pitch": 4.29
       }
      ],
      "items": [
       {
        "yaw": -82.68,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 26.33,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 1288,
           "width": 479,
           "url": "media/panorama_5517CD86_5C93_1FC8_41D1_51B034B82DAC_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 4.29
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_5517CD86_5C93_1FC8_41D1_51B034B82DAC_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_5517CD86_5C93_1FC8_41D1_51B034B82DAC_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_5517CD86_5C93_1FC8_41D1_51B034B82DAC.jpeg"
      }
     ]
    }
   }
  ],
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC",
     "thumbnailUrl": "media/panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC_t.jpg",
     "pitch": 0,
     "class": "Panorama",
     "label": "COCINA-2",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_736E1E5A_62A2_2453_41C0_D8C009386AA1",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D, this.camera_8FC3A0D7_9C45_9F52_41B9_9E08606515FA); this.mainPlayList.set('selectedIndex', 9)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 72,
              "width": 200,
              "url": "media/panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": -101.06,
           "hfov": 20.1,
           "pitch": -46.59
          }
         ],
         "items": [
          {
           "yaw": -101.06,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 20.1,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 188,
              "width": 522,
              "url": "media/panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -46.59
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_7058A2EE_62A6_3C72_41D4_7F144F6274EE",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_5517CD86_5C93_1FC8_41D1_51B034B82DAC, this.camera_8F35B0C0_9C45_9FAD_41DA_5E8A7025A186); this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 71,
              "url": "media/panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC_0_HS_1_1_0_map.gif"
             }
            ]
           },
           "yaw": 90.27,
           "hfov": 45.68,
           "pitch": -2.77
          }
         ],
         "items": [
          {
           "yaw": 90.27,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 45.68,
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 2048,
              "width": 729,
              "url": "media/panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -2.77
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_8EC0EF8E_9C44_81B2_41DE_B4B09CB02570",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 69,
              "url": "media/panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC_0_HS_2_1_0_map.gif"
             }
            ]
           },
           "yaw": -101.5,
           "hfov": 14.27,
           "pitch": -2.23
          }
         ],
         "items": [
          {
           "yaw": -101.5,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 14.27,
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 741,
              "width": 256,
              "url": "media/panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -2.23
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC.jpeg"
         }
        ]
       }
      }
     ],
     "hfov": 360,
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_5517CD86_5C93_1FC8_41D1_51B034B82DAC",
       "backwardYaw": -82.68,
       "yaw": 90.27,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "partial": false,
        "hfovMax": 120,
        "id": "panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D",
        "thumbnailUrl": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_t.jpg",
        "pitch": 0,
        "class": "Panorama",
        "label": "COMEDOR-2",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_72B832A6_62AE_3CF0_4176_050DBDC0838D",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 200,
                 "width": 70,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_0_1_0_map.gif"
                }
               ]
              },
              "yaw": -93.03,
              "hfov": 22.87,
              "pitch": -3.91
             }
            ],
            "items": [
             {
              "yaw": -93.03,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 22.87,
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1177,
                 "width": 414,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -3.91
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_73084813_62AF_EBD0_41D3_94C6F6D72DAC",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 200,
                 "width": 71,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_1_1_0_map.gif"
                }
               ]
              },
              "yaw": 92.3,
              "hfov": 21.52,
              "pitch": -4.06
             }
            ],
            "items": [
             {
              "yaw": 92.3,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 21.52,
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1085,
                 "width": 389,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -4.06
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_7302C9C7_62AE_6CB0_41BF_F9DB34C65390",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC, this.camera_8F530038_9C45_9EDD_41C9_B23537CDABB0); this.mainPlayList.set('selectedIndex', 8)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 126,
                 "width": 200,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "yaw": 91.95,
              "hfov": 16.54,
              "pitch": -42.77
             }
            ],
            "items": [
             {
              "yaw": 91.95,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 16.54,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 254,
                 "width": 402,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -42.77
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_7394A804_62A2_2BB7_41D2_095B9BDC0D4C",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_68516981_629D_AA09_4199_FFB3F71049B9, this.camera_8F6D0048_9C45_9EBD_41D5_6B7D5345D870); this.mainPlayList.set('selectedIndex', 7)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 200,
                 "width": 200,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_3_1_0_map.gif"
                }
               ]
              },
              "yaw": 0,
              "hfov": 90,
              "pitch": 0
             },
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 200,
                 "width": 200,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_3_2_4_map.gif"
                }
               ]
              },
              "yaw": 0,
              "hfov": 90,
              "pitch": 90
             },
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 200,
                 "width": 200,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_3_3_5_map.gif"
                }
               ]
              },
              "yaw": 0,
              "hfov": 90,
              "pitch": -90
             }
            ],
            "items": [
             {
              "yaw": 0,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 90,
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1300,
                 "width": 1300,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_3_00000.png"
                }
               ]
              },
              "pitch": 0
             },
             {
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1300,
                 "width": 1300,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_3_00004.png"
                }
               ]
              },
              "yaw": 0,
              "hfov": 90,
              "pitch": 90
             },
             {
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1300,
                 "width": 1300,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_3_00005.png"
                }
               ]
              },
              "yaw": 0,
              "hfov": 90,
              "pitch": -90
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_73FE7CB9_62A3_E4D1_41C5_461CA1E969BB",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F, this.camera_8F59501A_9C45_9EDD_41CD_FBC58DF16CA2); this.mainPlayList.set('selectedIndex', 11)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 200,
                 "width": 66,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_4_1_6_map.gif"
                }
               ]
              },
              "yaw": -0.87,
              "hfov": 32.51,
              "pitch": -4.45
             }
            ],
            "items": [
             {
              "yaw": -0.87,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 32.51,
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1807,
                 "width": 597,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_4_0.png"
                }
               ]
              },
              "pitch": -4.45
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_726B4E85_62A2_64B6_41C1_B2584B13B501",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC, this.camera_8F5FA02E_9C45_9EF5_41D0_979B282F5F9B); this.mainPlayList.set('selectedIndex', 10)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 200,
                 "width": 200,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_5_1_0_map.gif"
                }
               ]
              },
              "yaw": 0,
              "hfov": 90,
              "pitch": 0
             },
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 200,
                 "width": 200,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_5_2_4_map.gif"
                }
               ]
              },
              "yaw": 0,
              "hfov": 90,
              "pitch": 90
             },
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 200,
                 "width": 200,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_5_3_5_map.gif"
                }
               ]
              },
              "yaw": 0,
              "hfov": 90,
              "pitch": -90
             }
            ],
            "items": [
             {
              "yaw": 0,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 90,
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1300,
                 "width": 1300,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_5_00000.png"
                }
               ]
              },
              "pitch": 0
             },
             {
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1300,
                 "width": 1300,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_5_00004.png"
                }
               ]
              },
              "yaw": 0,
              "hfov": 90,
              "pitch": 90
             },
             {
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1300,
                 "width": 1300,
                 "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_0_HS_5_00005.png"
                }
               ]
              },
              "yaw": 0,
              "hfov": 90,
              "pitch": -90
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D.jpeg"
            }
           ]
          }
         }
        ],
        "hfov": 360,
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "partial": false,
           "hfovMax": 120,
           "id": "panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F",
           "thumbnailUrl": "media/panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F_t.jpg",
           "pitch": 0,
           "class": "Panorama",
           "label": "DOMITORIO SECUNDARIO-2",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_70862228_62A6_3FFC_41CE_B153EB2E8E94",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D, this.camera_8F664057_9C45_9F52_41D7_CD195AE481C9); this.mainPlayList.set('selectedIndex', 9)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 200,
                    "width": 200,
                    "url": "media/panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F_0_HS_0_1_2_map.gif"
                   }
                  ]
                 },
                 "yaw": -180,
                 "hfov": 90,
                 "pitch": 0
                },
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 200,
                    "width": 200,
                    "url": "media/panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F_0_HS_0_2_3_map.gif"
                   }
                  ]
                 },
                 "yaw": -90,
                 "hfov": 90,
                 "pitch": 0
                },
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 200,
                    "width": 200,
                    "url": "media/panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F_0_HS_0_3_4_map.gif"
                   }
                  ]
                 },
                 "yaw": 0,
                 "hfov": 90,
                 "pitch": 90
                },
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 200,
                    "width": 200,
                    "url": "media/panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F_0_HS_0_4_5_map.gif"
                   }
                  ]
                 },
                 "yaw": 0,
                 "hfov": 90,
                 "pitch": -90
                }
               ],
               "items": [
                {
                 "yaw": -180,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 90,
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 1300,
                    "width": 1300,
                    "url": "media/panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F_0_HS_0_00002.png"
                   }
                  ]
                 },
                 "pitch": 0
                },
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 1300,
                    "width": 1300,
                    "url": "media/panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F_0_HS_0_00003.png"
                   }
                  ]
                 },
                 "yaw": -90,
                 "hfov": 90,
                 "pitch": 0
                },
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 1300,
                    "width": 1300,
                    "url": "media/panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F_0_HS_0_00004.png"
                   }
                  ]
                 },
                 "yaw": 0,
                 "hfov": 90,
                 "pitch": 90
                },
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 1300,
                    "width": 1300,
                    "url": "media/panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F_0_HS_0_00005.png"
                   }
                  ]
                 },
                 "yaw": 0,
                 "hfov": 90,
                 "pitch": -90
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F.jpeg"
               }
              ]
             }
            }
           ],
           "hfov": 360,
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D",
             "backwardYaw": -0.87,
             "yaw": -112.25,
             "distance": 1
            }
           ]
          },
          "backwardYaw": -112.25,
          "yaw": -0.87,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "partial": false,
           "hfovMax": 120,
           "id": "panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC",
           "thumbnailUrl": "media/panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_t.jpg",
           "pitch": 0,
           "class": "Panorama",
           "label": "DOMITORIO PRINCIPAL-2",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_70BC7A5C_62A6_2C54_41BC_F0EAA6E26D2D",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D, this.camera_8F71F065_9C45_9F77_41E3_438FC0CD32FD); this.mainPlayList.set('selectedIndex', 9)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 200,
                    "width": 200,
                    "url": "media/panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_0_HS_0_1_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 0,
                 "hfov": 90,
                 "pitch": 0
                },
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 200,
                    "width": 200,
                    "url": "media/panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_0_HS_0_2_2_map.gif"
                   }
                  ]
                 },
                 "yaw": -180,
                 "hfov": 90,
                 "pitch": 0
                },
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 200,
                    "width": 200,
                    "url": "media/panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_0_HS_0_3_3_map.gif"
                   }
                  ]
                 },
                 "yaw": -90,
                 "hfov": 90,
                 "pitch": 0
                },
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 200,
                    "width": 200,
                    "url": "media/panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_0_HS_0_4_4_map.gif"
                   }
                  ]
                 },
                 "yaw": 0,
                 "hfov": 90,
                 "pitch": 90
                },
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 200,
                    "width": 200,
                    "url": "media/panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_0_HS_0_5_5_map.gif"
                   }
                  ]
                 },
                 "yaw": 0,
                 "hfov": 90,
                 "pitch": -90
                }
               ],
               "items": [
                {
                 "yaw": 0,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 90,
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 1300,
                    "width": 1300,
                    "url": "media/panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_0_HS_0_00000.png"
                   }
                  ]
                 },
                 "pitch": 0
                },
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 1300,
                    "width": 1300,
                    "url": "media/panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_0_HS_0_00002.png"
                   }
                  ]
                 },
                 "yaw": -180,
                 "hfov": 90,
                 "pitch": 0
                },
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 1300,
                    "width": 1300,
                    "url": "media/panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_0_HS_0_00003.png"
                   }
                  ]
                 },
                 "yaw": -90,
                 "hfov": 90,
                 "pitch": 0
                },
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 1300,
                    "width": 1300,
                    "url": "media/panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_0_HS_0_00004.png"
                   }
                  ]
                 },
                 "yaw": 0,
                 "hfov": 90,
                 "pitch": 90
                },
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 1300,
                    "width": 1300,
                    "url": "media/panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_0_HS_0_00005.png"
                   }
                  ]
                 },
                 "yaw": 0,
                 "hfov": 90,
                 "pitch": -90
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC.jpeg"
               }
              ]
             }
            }
           ],
           "hfov": 360,
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D",
             "backwardYaw": -29.94,
             "yaw": -94.12,
             "distance": 1
            }
           ]
          },
          "backwardYaw": -94.12,
          "yaw": -29.94,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC",
          "backwardYaw": -101.06,
          "yaw": 91.95,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "partial": false,
           "hfovMax": 120,
           "id": "panorama_68516981_629D_AA09_4199_FFB3F71049B9",
           "thumbnailUrl": "media/panorama_68516981_629D_AA09_4199_FFB3F71049B9_t.jpg",
           "pitch": 0,
           "class": "Panorama",
           "label": "BA\u00d1O-2",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_7343CC8C_62A6_24B5_41D2_72F8B714C905",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D, this.camera_8FD1F0F0_9C45_9F6D_41D2_4A53E6606659); this.mainPlayList.set('selectedIndex', 9)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 200,
                    "width": 200,
                    "url": "media/panorama_68516981_629D_AA09_4199_FFB3F71049B9_0_HS_0_1_3_map.gif"
                   }
                  ]
                 },
                 "yaw": -90,
                 "hfov": 90,
                 "pitch": 0
                },
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 200,
                    "width": 200,
                    "url": "media/panorama_68516981_629D_AA09_4199_FFB3F71049B9_0_HS_0_2_4_map.gif"
                   }
                  ]
                 },
                 "yaw": 0,
                 "hfov": 90,
                 "pitch": 90
                },
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 200,
                    "width": 200,
                    "url": "media/panorama_68516981_629D_AA09_4199_FFB3F71049B9_0_HS_0_3_5_map.gif"
                   }
                  ]
                 },
                 "yaw": 0,
                 "hfov": 90,
                 "pitch": -90
                }
               ],
               "items": [
                {
                 "yaw": -90,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 90,
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 1300,
                    "width": 1300,
                    "url": "media/panorama_68516981_629D_AA09_4199_FFB3F71049B9_0_HS_0_00003.png"
                   }
                  ]
                 },
                 "pitch": 0
                },
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 1300,
                    "width": 1300,
                    "url": "media/panorama_68516981_629D_AA09_4199_FFB3F71049B9_0_HS_0_00004.png"
                   }
                  ]
                 },
                 "yaw": 0,
                 "hfov": 90,
                 "pitch": 90
                },
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 1300,
                    "width": 1300,
                    "url": "media/panorama_68516981_629D_AA09_4199_FFB3F71049B9_0_HS_0_00005.png"
                   }
                  ]
                 },
                 "yaw": 0,
                 "hfov": 90,
                 "pitch": -90
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_68516981_629D_AA09_4199_FFB3F71049B9_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_68516981_629D_AA09_4199_FFB3F71049B9_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_68516981_629D_AA09_4199_FFB3F71049B9.jpeg"
               }
              ]
             }
            }
           ],
           "hfov": 360,
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D",
             "backwardYaw": 28.92,
             "yaw": -87.51,
             "distance": 1
            }
           ]
          },
          "backwardYaw": -87.51,
          "yaw": 28.92,
          "distance": 1
         }
        ]
       },
       "backwardYaw": 91.95,
       "yaw": -101.06,
       "distance": 1
      }
     ]
    },
    "backwardYaw": 90.27,
    "yaw": -82.68,
    "distance": 1
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5517CD86_5C93_1FC8_41D1_51B034B82DAC_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_68516981_629D_AA09_4199_FFB3F71049B9",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_68516981_629D_AA09_4199_FFB3F71049B9_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "partial": false,
  "id": "panorama_6BE5E945_629C_6A09_41AB_043CAA42A03C",
  "thumbnailUrl": "media/panorama_6BE5E945_629C_6A09_41AB_043CAA42A03C_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "HALL-2",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_6BE5E945_629C_6A09_41AB_043CAA42A03C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6BE5E945_629C_6A09_41AB_043CAA42A03C_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_6BE5E945_629C_6A09_41AB_043CAA42A03C.jpeg"
      }
     ]
    }
   }
  ],
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_6BE5E945_629C_6A09_41AB_043CAA42A03C_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_55D2FF12_5C75_1B42_41D6_ED91B1BF609F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5516D2E0_5C95_054F_41D1_AA7E2C7241E2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5516D2E0_5C95_054F_41D1_AA7E2C7241E2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_554A6BE7_5C95_1B51_41D4_917F48C7F389_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_554AB742_5C95_0B53_41CD_66B67DBA2D79",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_554AB742_5C95_0B53_41CD_66B67DBA2D79_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_554A2A50_5C95_054F_41B3_873E1D0D6E38_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5517CD86_5C93_1FC8_41D1_51B034B82DAC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5517CD86_5C93_1FC8_41D1_51B034B82DAC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_56C0BBD3_5C93_1B4F_41C0_227CF47A4DF9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_68516981_629D_AA09_4199_FFB3F71049B9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_68516981_629D_AA09_4199_FFB3F71049B9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6B1AE36C_629D_BE1F_41D6_DC169240AEAC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6BE53CEE_629D_AA1B_41B7_DA62EFD2454D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6BE52669_629C_6619_41D1_E0D09DAE97AC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6BE5FFFA_629C_65FB_41D0_12A906A4484F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6BE5E945_629C_6A09_41AB_043CAA42A03C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6BE5E945_629C_6A09_41AB_043CAA42A03C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)"
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_8F59501A_9C45_9EDD_41CD_FBC58DF16CA2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 67.75,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_8F5FA02E_9C45_9EF5_41D0_979B282F5F9B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 85.88,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_8F530038_9C45_9EDD_41C9_B23537CDABB0",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 78.94,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_8F6D0048_9C45_9EBD_41D5_6B7D5345D870",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 92.49,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_8F664057_9C45_9F52_41D7_CD195AE481C9",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.13,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_8F71F065_9C45_9F77_41E3_438FC0CD32FD",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 150.06,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_8F0DF074_9C45_9F55_41AF_B8586FCB78A1",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.88,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_8F078083_9C45_9FB3_41C1_B61B5BC1B075",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.78,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_8F13E092_9C45_9FAD_41DB_A3E9F08928EE",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.5,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_8F2DA0A0_9C45_9FED_41D7_D71144B594ED",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.01,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_8F39B0A6_9C45_9FF5_41DA_9D39CF269B3B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.73,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_8F35B0C0_9C45_9FAD_41DA_5E8A7025A186",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 97.32,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_8FC3A0D7_9C45_9F52_41B9_9E08606515FA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -88.05,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_8FD1F0F0_9C45_9F6D_41D2_4A53E6606659",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -151.08,
   "pitch": 0
  }
 }
], "children": [
 {
  "playbackBarBorderRadius": 0,
  "paddingRight": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBorderSize": 0,
  "playbackBarHeadShadow": true,
  "toolTipShadowOpacity": 1,
  "toolTipBorderColor": "#767676",
  "toolTipShadowColor": "#333333",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontSize": 12,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingTop": 4,
  "progressBarOpacity": 1,
  "progressBackgroundOpacity": 1,
  "shadow": false,
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "toolTipOpacity": 1,
  "progressBottom": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadHeight": 15,
  "toolTipBorderRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "playbackBarOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderColor": "#000000",
  "progressRight": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "progressBarBorderRadius": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBottom": 5,
  "progressLeft": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "paddingLeft": 0,
  "progressBorderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontFamily": "Arial",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "transitionMode": "blending",
  "progressBarBorderSize": 0,
  "playbackBarRight": 0,
  "borderSize": 0,
  "width": "100%",
  "playbackBarHeight": 10,
  "playbackBarBorderColor": "#FFFFFF",
  "height": "100%",
  "toolTipPaddingLeft": 6,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "borderRadius": 0,
  "minWidth": 100,
  "minHeight": 50,
  "progressHeight": 10,
  "id": "MainViewer",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderSize": 0,
  "toolTipPaddingRight": 6,
  "class": "ViewerArea",
  "toolTipFontStyle": "normal",
  "toolTipFontColor": "#606060"
 }
], 
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "overflow": "visible",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "gap": 10,
 "scripts": {
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getKey": function(key){  return window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "existsKey": function(key){  return key in window; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } }
 },
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "height": "100%",
 "vrPolyfillScale": 0.5,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "minWidth": 20,
 "minHeight": 20,
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Player",
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top"
})