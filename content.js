window.RAILSCENES = {
  "scenes": [
    {
      "id": "1642267122516000_00029",
      "panel": "a1",
      "src": "assets/scenes/1642267122516000_00029.webp",
      "title": "Above-ground",
      "titleZh": "地上区间",
      "group": "environment",
      "sample": "15_L/Data_20220116_011605_L/scene12/1642267122516000_00029",
      "environment": "地上",
      "lighting": "黑夜",
      "track_shape": "直道"
    },
    {
      "id": "1642259571184000_00001",
      "panel": "a2",
      "src": "assets/scenes/1642259571184000_00001.webp",
      "title": "Underground corridor",
      "titleZh": "地下廊道",
      "group": "environment",
      "sample": "15_L/Data_20220115_231251_L/scene1/1642259571184000_00001",
      "environment": "地下非隧道",
      "lighting": "弱光",
      "track_shape": "直道"
    },
    {
      "id": "1642259624922000_00001",
      "panel": "a3",
      "src": "assets/scenes/1642259624922000_00001.webp",
      "title": "Tunnel",
      "titleZh": "地下隧道",
      "group": "environment",
      "sample": "15_L/Data_20220115_231251_L/scene5/1642259624922000_00001",
      "environment": "地下隧道",
      "lighting": "强光",
      "track_shape": "直道"
    },
    {
      "id": "1642259598046000_00044",
      "panel": "a4",
      "src": "assets/scenes/1642259598046000_00044.webp",
      "title": "Enclosed track corridor",
      "titleZh": "封闭轨道廊道",
      "group": "environment",
      "sample": "15_L/Data_20220115_231251_L/scene2/1642259598046000_00044",
      "environment": "地下非隧道",
      "lighting": "弱光",
      "track_shape": "直道"
    },
    {
      "id": "1642266428244000_00030",
      "panel": "b1",
      "src": "assets/scenes/1642266428244000_00030.webp",
      "title": "Tunnel lighting",
      "titleZh": "隧道照明",
      "group": "illumination",
      "sample": "15_L/Data_20220116_010554_L/scene6/1642266428244000_00030",
      "environment": "地下隧道",
      "lighting": "弱光",
      "track_shape": "直道"
    },
    {
      "id": "1642266056955000_00001",
      "panel": "b2",
      "src": "assets/scenes/1642266056955000_00001.webp",
      "title": "Low light",
      "titleZh": "弱光区间",
      "group": "illumination",
      "sample": "15_L/Data_20220116_010043_L/scene2/1642266056955000_00001",
      "environment": "地下非隧道",
      "lighting": "弱光",
      "track_shape": "直道"
    },
    {
      "id": "1642266889762000_00029",
      "panel": "b3",
      "src": "assets/scenes/1642266889762000_00029.webp",
      "title": "Nighttime",
      "titleZh": "夜间区间",
      "group": "illumination",
      "sample": "15_L/Data_20220116_011059_L/scene18/1642266889762000_00029",
      "environment": "地上",
      "lighting": "黑夜",
      "track_shape": "直道"
    },
    {
      "id": "1701843428766693_00006",
      "panel": "b4",
      "src": "assets/scenes/1701843428766693_00006.webp",
      "title": "Rail facility in daylight",
      "titleZh": "日间轨道设施区",
      "group": "illumination",
      "sample": "5_L/Data_20231206_141707_L_101_scene1/1701843428766693_00006",
      "environment": "地上",
      "lighting": "白天",
      "track_shape": "岔道"
    },
    {
      "id": "1642259690070000_00001",
      "panel": "c1",
      "src": "assets/scenes/1642259690070000_00001.webp",
      "title": "Straight track",
      "titleZh": "直道",
      "group": "track-layout",
      "sample": "15_L/Data_20220115_231251_L/scene10/1642259690070000_00001",
      "environment": "地下隧道",
      "lighting": "强光",
      "track_shape": "直道"
    },
    {
      "id": "1642266467051000_00029",
      "panel": "c2",
      "src": "assets/scenes/1642266467051000_00029.webp",
      "title": "Curved track",
      "titleZh": "弯道",
      "group": "track-layout",
      "sample": "15_L/Data_20220116_010554_L/scene9/1642266467051000_00029",
      "environment": "地下隧道",
      "lighting": "弱光",
      "track_shape": "弯道"
    },
    {
      "id": "1642257866571000_00001",
      "panel": "c3",
      "src": "assets/scenes/1642257866571000_00001.webp",
      "title": "Turnout approach",
      "titleZh": "岔道接近区间",
      "group": "track-layout",
      "sample": "15_L/Data_20220115_224159_L/scene12/1642257866571000_00001",
      "environment": "地下非隧道",
      "lighting": "弱光",
      "track_shape": "岔道"
    },
    {
      "id": "1642268088616000_00001",
      "panel": "c4",
      "src": "assets/scenes/1642268088616000_00001.webp",
      "title": "Multiple tracks",
      "titleZh": "多轨道区间",
      "group": "track-layout",
      "sample": "15_L/Data_20220116_013134_L/scene16/1642268088616000_00001",
      "environment": "地上",
      "lighting": "黑夜",
      "track_shape": "岔道"
    }
  ],
  "segmentation": [
    {
      "frame": "1642266900875000_00023",
      "sample": "15_L/Data_20220116_011059_L/scene19/1642266900875000_00023",
      "environment": "地上",
      "lighting": "黑夜",
      "track_shape": "直道",
      "cells": [
        {
          "method": "GT",
          "src": "assets/segmentation/01.webp"
        },
        {
          "method": "DPT",
          "src": "assets/segmentation/02.webp"
        },
        {
          "method": "Mask2Former",
          "src": "assets/segmentation/03.webp"
        },
        {
          "method": "KNet",
          "src": "assets/segmentation/04.webp"
        },
        {
          "method": "SETR",
          "src": "assets/segmentation/05.webp"
        },
        {
          "method": "DDRNet",
          "src": "assets/segmentation/06.webp"
        }
      ]
    },
    {
      "frame": "1701835315403676_00041",
      "sample": "5_L/Data_20231206_120143_L_101/1701835315403676_00041",
      "environment": "站点",
      "lighting": "白天",
      "track_shape": "直道",
      "cells": [
        {
          "method": "GT",
          "src": "assets/segmentation/07.webp"
        },
        {
          "method": "DPT",
          "src": "assets/segmentation/08.webp"
        },
        {
          "method": "Mask2Former",
          "src": "assets/segmentation/09.webp"
        },
        {
          "method": "KNet",
          "src": "assets/segmentation/10.webp"
        },
        {
          "method": "SETR",
          "src": "assets/segmentation/11.webp"
        },
        {
          "method": "DDRNet",
          "src": "assets/segmentation/12.webp"
        }
      ]
    },
    {
      "frame": "1642259618318000_00022",
      "sample": "15_L/Data_20220115_231251_L/scene4/1642259618318000_00022",
      "environment": "地下隧道",
      "lighting": "强光",
      "track_shape": "直道",
      "cells": [
        {
          "method": "GT",
          "src": "assets/segmentation/13.webp"
        },
        {
          "method": "DPT",
          "src": "assets/segmentation/14.webp"
        },
        {
          "method": "Mask2Former",
          "src": "assets/segmentation/15.webp"
        },
        {
          "method": "KNet",
          "src": "assets/segmentation/16.webp"
        },
        {
          "method": "SETR",
          "src": "assets/segmentation/17.webp"
        },
        {
          "method": "DDRNet",
          "src": "assets/segmentation/18.webp"
        }
      ]
    },
    {
      "frame": "1642266657003000_00009",
      "sample": "15_L/Data_20220116_010554_L/scene24/1642266657003000_00009",
      "environment": "地下非隧道",
      "lighting": "弱光",
      "track_shape": "直道",
      "cells": [
        {
          "method": "GT",
          "src": "assets/segmentation/19.webp"
        },
        {
          "method": "DPT",
          "src": "assets/segmentation/20.webp"
        },
        {
          "method": "Mask2Former",
          "src": "assets/segmentation/21.webp"
        },
        {
          "method": "KNet",
          "src": "assets/segmentation/22.webp"
        },
        {
          "method": "SETR",
          "src": "assets/segmentation/23.webp"
        },
        {
          "method": "DDRNet",
          "src": "assets/segmentation/24.webp"
        }
      ]
    },
    {
      "frame": "1642258843902000_00023",
      "sample": "15_L/Data_20220115_225729_L/scene15/1642258843902000_00023",
      "environment": "地下隧道",
      "lighting": "强光",
      "track_shape": "弯道",
      "cells": [
        {
          "method": "GT",
          "src": "assets/segmentation/25.webp"
        },
        {
          "method": "DPT",
          "src": "assets/segmentation/26.webp"
        },
        {
          "method": "Mask2Former",
          "src": "assets/segmentation/27.webp"
        },
        {
          "method": "KNet",
          "src": "assets/segmentation/28.webp"
        },
        {
          "method": "SETR",
          "src": "assets/segmentation/29.webp"
        },
        {
          "method": "DDRNet",
          "src": "assets/segmentation/30.webp"
        }
      ]
    },
    {
      "frame": "1642266118579000_00022",
      "sample": "15_L/Data_20220116_010043_L/scene6/1642266118579000_00022",
      "environment": "地下非隧道",
      "lighting": "弱光",
      "track_shape": "岔道",
      "cells": [
        {
          "method": "GT",
          "src": "assets/segmentation/31.webp"
        },
        {
          "method": "DPT",
          "src": "assets/segmentation/32.webp"
        },
        {
          "method": "Mask2Former",
          "src": "assets/segmentation/33.webp"
        },
        {
          "method": "KNet",
          "src": "assets/segmentation/34.webp"
        },
        {
          "method": "SETR",
          "src": "assets/segmentation/35.webp"
        },
        {
          "method": "DDRNet",
          "src": "assets/segmentation/36.webp"
        }
      ]
    }
  ],
  "detection": [
    {
      "group": "camera",
      "row": 1,
      "frame": "1642266521589000_00037",
      "sample": "15_L/Data_20220116_010554_L/scene13/1642266521589000_00037",
      "target": "OtherInfoPlate",
      "forwardY": 118.25053884403383,
      "cells": [
        {
          "method": "GT",
          "src": "assets/detection/camera_01_GT.webp"
        },
        {
          "method": "BEVDet4D",
          "src": "assets/detection/camera_01_BEVDet4D.webp"
        },
        {
          "method": "DualBEV",
          "src": "assets/detection/camera_01_DualBEV.webp"
        },
        {
          "method": "BEVDet",
          "src": "assets/detection/camera_01_BEVDet.webp"
        }
      ]
    },
    {
      "group": "camera",
      "row": 2,
      "frame": "1642259246987000_00036",
      "sample": "15_L/Data_20220115_230240_L/scene22/1642259246987000_00036",
      "target": "DistancePlate",
      "forwardY": 80.60352133502732,
      "cells": [
        {
          "method": "GT",
          "src": "assets/detection/camera_02_GT.webp"
        },
        {
          "method": "BEVDet4D",
          "src": "assets/detection/camera_02_BEVDet4D.webp"
        },
        {
          "method": "DualBEV",
          "src": "assets/detection/camera_02_DualBEV.webp"
        },
        {
          "method": "BEVDet",
          "src": "assets/detection/camera_02_BEVDet.webp"
        }
      ]
    },
    {
      "group": "camera",
      "row": 3,
      "frame": "1642259403960000_00030",
      "sample": "15_L/Data_20220115_230745_L/scene11/1642259403960000_00030",
      "target": "YellowInfoPlate",
      "forwardY": 168.25113813303952,
      "cells": [
        {
          "method": "GT",
          "src": "assets/detection/camera_03_GT.webp"
        },
        {
          "method": "BEVDet4D",
          "src": "assets/detection/camera_03_BEVDet4D.webp"
        },
        {
          "method": "DualBEV",
          "src": "assets/detection/camera_03_DualBEV.webp"
        },
        {
          "method": "BEVDet",
          "src": "assets/detection/camera_03_BEVDet.webp"
        }
      ]
    },
    {
      "group": "fusion",
      "row": 1,
      "frame": "1642266658217000_00013",
      "sample": "15_L/Data_20220116_010554_L/scene24/1642266658217000_00013",
      "target": "GreenLight",
      "forwardY": 63.98886685200253,
      "cells": [
        {
          "method": "GT",
          "src": "assets/detection/fusion_01_GT.webp"
        },
        {
          "method": "IS-Fusion",
          "src": "assets/detection/fusion_01_IS-Fusion.webp"
        },
        {
          "method": "TransFusion",
          "src": "assets/detection/fusion_01_TransFusion.webp"
        },
        {
          "method": "BEVFusion",
          "src": "assets/detection/fusion_01_BEVFusion.webp"
        }
      ]
    },
    {
      "group": "fusion",
      "row": 2,
      "frame": "1642266514043000_00012",
      "sample": "15_L/Data_20220116_010554_L/scene13/1642266514043000_00012",
      "target": "DistancePlate",
      "forwardY": 49.58977110211705,
      "cells": [
        {
          "method": "GT",
          "src": "assets/detection/fusion_02_GT.webp"
        },
        {
          "method": "IS-Fusion",
          "src": "assets/detection/fusion_02_IS-Fusion.webp"
        },
        {
          "method": "TransFusion",
          "src": "assets/detection/fusion_02_TransFusion.webp"
        },
        {
          "method": "BEVFusion",
          "src": "assets/detection/fusion_02_BEVFusion.webp"
        }
      ]
    },
    {
      "group": "fusion",
      "row": 3,
      "frame": "1642259473232000_00043",
      "sample": "15_L/Data_20220115_230745_L/scene16/1642259473232000_00043",
      "target": "DistancePlate",
      "forwardY": 102.82753294156107,
      "cells": [
        {
          "method": "GT",
          "src": "assets/detection/fusion_03_GT.webp"
        },
        {
          "method": "IS-Fusion",
          "src": "assets/detection/fusion_03_IS-Fusion.webp"
        },
        {
          "method": "TransFusion",
          "src": "assets/detection/fusion_03_TransFusion.webp"
        },
        {
          "method": "BEVFusion",
          "src": "assets/detection/fusion_03_BEVFusion.webp"
        }
      ]
    },
    {
      "group": "lidar",
      "row": 1,
      "frame": "1642266521893000_00038",
      "sample": "15_L/Data_20220116_010554_L/scene13/1642266521893000_00038",
      "target": "OtherInfoPlate",
      "forwardY": 113.16746976751683,
      "cells": [
        {
          "method": "GT",
          "src": "assets/detection/lidar_01_GT.webp"
        },
        {
          "method": "DSVT",
          "src": "assets/detection/lidar_01_DSVT.webp"
        },
        {
          "method": "HEDNet",
          "src": "assets/detection/lidar_01_HEDNet.webp"
        },
        {
          "method": "SAFDNET",
          "src": "assets/detection/lidar_01_SAFDNET.webp"
        }
      ]
    },
    {
      "group": "lidar",
      "row": 2,
      "frame": "1642259611999000_00001",
      "sample": "15_L/Data_20220115_231251_L/scene4/1642259611999000_00001",
      "target": "DistancePlate",
      "forwardY": 91.59793270112273,
      "cells": [
        {
          "method": "GT",
          "src": "assets/detection/lidar_02_GT.webp"
        },
        {
          "method": "DSVT",
          "src": "assets/detection/lidar_02_DSVT.webp"
        },
        {
          "method": "HEDNet",
          "src": "assets/detection/lidar_02_HEDNet.webp"
        },
        {
          "method": "SAFDNET",
          "src": "assets/detection/lidar_02_SAFDNET.webp"
        }
      ]
    },
    {
      "group": "lidar",
      "row": 3,
      "frame": "1642259244018000_00026",
      "sample": "15_L/Data_20220115_230240_L/scene22/1642259244018000_00026",
      "target": "DistancePlate",
      "forwardY": 89.80664534479712,
      "cells": [
        {
          "method": "GT",
          "src": "assets/detection/lidar_03_GT.webp"
        },
        {
          "method": "DSVT",
          "src": "assets/detection/lidar_03_DSVT.webp"
        },
        {
          "method": "HEDNet",
          "src": "assets/detection/lidar_03_HEDNet.webp"
        },
        {
          "method": "SAFDNET",
          "src": "assets/detection/lidar_03_SAFDNET.webp"
        }
      ]
    }
  ],
  "keyExample": {
    "frame": "1642266511343000_00003",
    "forwardY": 97.86668193674322,
    "projectedSize": [
      11.589935919,
      7.370254192
    ],
    "points3D": 1,
    "pointsBEV": 2,
    "cells": [
      {
        "method": "GT",
        "src": "assets/detection/key_01_GT.webp"
      },
      {
        "method": "IS-Fusion",
        "src": "assets/detection/key_02_IS-Fusion.webp"
      },
      {
        "method": "TransFusion",
        "src": "assets/detection/key_03_TransFusion.webp"
      },
      {
        "method": "Focals",
        "src": "assets/detection/key_04_Focals.webp"
      }
    ]
  },
  "tables": {
    "segmentation": [
      {
        "method": "BiSeNetV2",
        "values": [
          87.89,
          84.95,
          99.42,
          90.62,
          92.98,
          87.66,
          96.11,
          91.38
        ]
      },
      {
        "method": "DDRNet",
        "values": [
          89.22,
          88.11,
          99.36,
          93.95,
          93.08,
          88.22,
          97.23,
          92.74
        ]
      },
      {
        "method": "PIDNet",
        "values": [
          89.64,
          87.42,
          99.46,
          93.4,
          93.34,
          89.09,
          96.8,
          92.74
        ]
      },
      {
        "method": "STDC1",
        "values": [
          88.85,
          85.23,
          99.46,
          87.46,
          92.79,
          88.79,
          91.21,
          90.54
        ]
      },
      {
        "method": "DPT",
        "values": [
          90.91,
          89.58,
          99.58,
          95.81,
          94.53,
          90.66,
          97.3,
          94.05
        ]
      },
      {
        "method": "SegFormer",
        "values": [
          89.58,
          87.11,
          99.55,
          93.8,
          93.91,
          89.71,
          96.89,
          92.94
        ]
      },
      {
        "method": "Segmenter",
        "values": [
          85.47,
          82.83,
          99.32,
          89.64,
          90.49,
          85.22,
          90.89,
          89.12
        ]
      },
      {
        "method": "SETR",
        "values": [
          90.11,
          87.81,
          99.57,
          95.02,
          93.98,
          90.17,
          96.83,
          93.35
        ]
      },
      {
        "method": "K-Net",
        "values": [
          89.92,
          88.19,
          99.54,
          94.61,
          94.08,
          89.57,
          97.68,
          93.37
        ]
      },
      {
        "method": "MaskFormer",
        "values": [
          84.86,
          82.18,
          99.5,
          91.71,
          92.93,
          88.49,
          96.73,
          90.92
        ]
      },
      {
        "method": "Mask2Former",
        "values": [
          90.16,
          86.6,
          99.58,
          95.3,
          94.81,
          90.57,
          97.25,
          93.47
        ]
      }
    ],
    "detection": [
      {
        "method": "Far3D",
        "values": [
          "Camera",
          1.61,
          31.2,
          3.47,
          22.4,
          19.81,
          38.67,
          19.53
        ]
      },
      {
        "method": "BEVFormer",
        "values": [
          "Camera",
          0.46,
          64.34,
          3.66,
          17.63,
          20.51,
          29.65,
          22.71
        ]
      },
      {
        "method": "BEVNeXt",
        "values": [
          "Camera",
          3.51,
          55.93,
          5.18,
          25.94,
          21.87,
          23.49,
          22.65
        ]
      },
      {
        "method": "BEVDet",
        "values": [
          "Camera",
          0.0,
          61.63,
          4.8,
          28.72,
          22.07,
          21.13,
          23.06
        ]
      },
      {
        "method": "BEVDet4D",
        "values": [
          "Camera",
          1.64,
          71.77,
          7.06,
          28.09,
          19.71,
          26.16,
          25.74
        ]
      },
      {
        "method": "DualBEV",
        "values": [
          "Camera",
          0.42,
          71.84,
          6.41,
          26.44,
          16.8,
          19.91,
          23.64
        ]
      },
      {
        "method": "StreamPETR",
        "values": [
          "Camera",
          4.19,
          55.57,
          1.98,
          19.15,
          10.74,
          18.19,
          18.3
        ]
      },
      {
        "method": "SphereFormer",
        "values": [
          "LiDAR",
          26.34,
          99.78,
          19.01,
          7.11,
          10.29,
          28.39,
          31.82
        ]
      },
      {
        "method": "DSVT",
        "values": [
          "LiDAR",
          53.86,
          97.03,
          41.59,
          9.33,
          4.46,
          39.43,
          40.95
        ]
      },
      {
        "method": "HEDNet",
        "values": [
          "LiDAR",
          37.37,
          98.65,
          46.75,
          4.81,
          15.97,
          40.68,
          40.71
        ]
      },
      {
        "method": "SAFDNet",
        "values": [
          "LiDAR",
          46.05,
          98.48,
          34.08,
          6.43,
          3.77,
          20.55,
          34.89
        ]
      },
      {
        "method": "VoxelNeXt",
        "values": [
          "LiDAR",
          37.64,
          99.27,
          15.04,
          5.39,
          6.38,
          25.48,
          31.53
        ]
      },
      {
        "method": "BEVFusion",
        "values": [
          "Camera+LiDAR",
          22.49,
          67.64,
          16.46,
          11.62,
          0.95,
          12.43,
          21.93
        ]
      },
      {
        "method": "TransFusion",
        "values": [
          "Camera+LiDAR",
          28.93,
          68.53,
          21.47,
          11.95,
          1.81,
          9.82,
          23.75
        ]
      },
      {
        "method": "IS-Fusion",
        "values": [
          "Camera+LiDAR",
          50.79,
          75.43,
          53.22,
          30.3,
          13.53,
          39.37,
          43.77
        ]
      },
      {
        "method": "FocalsConv",
        "values": [
          "Camera+LiDAR",
          58.64,
          96.69,
          33.9,
          37.35,
          14.97,
          39.42,
          46.83
        ]
      },
      {
        "method": "UniTR",
        "values": [
          "Camera+LiDAR",
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      }
    ],
    "distance": [
      {
        "method": "Far3D",
        "values": [
          29.05,
          22.75,
          9.43,
          0.0
        ]
      },
      {
        "method": "BEVFormer",
        "values": [
          33.0,
          19.9,
          7.5,
          0.0
        ]
      },
      {
        "method": "BEVNeXt",
        "values": [
          35.4,
          12.53,
          6.79,
          0.0
        ]
      },
      {
        "method": "BEVDet",
        "values": [
          34.96,
          16.6,
          5.49,
          0.0
        ]
      },
      {
        "method": "BEVDet4D",
        "values": [
          38.22,
          16.57,
          9.75,
          0.0
        ]
      },
      {
        "method": "DualBEV",
        "values": [
          36.45,
          12.98,
          10.23,
          0.0
        ]
      },
      {
        "method": "StreamPETR",
        "values": [
          31.52,
          12.97,
          3.32,
          0.04
        ]
      },
      {
        "method": "SphereFormer",
        "values": [
          40.33,
          33.71,
          26.61,
          6.84
        ]
      },
      {
        "method": "DSVT",
        "values": [
          38.65,
          43.82,
          39.11,
          16.3
        ]
      },
      {
        "method": "HEDNet",
        "values": [
          38.7,
          42.72,
          38.65,
          12.21
        ]
      },
      {
        "method": "SAFDNet",
        "values": [
          34.28,
          36.75,
          31.97,
          13.8
        ]
      },
      {
        "method": "VoxelNeXt",
        "values": [
          37.38,
          32.76,
          21.41,
          10.08
        ]
      },
      {
        "method": "BEVFusion",
        "values": [
          26.92,
          20.06,
          1.63,
          7.46
        ]
      },
      {
        "method": "TransFusion",
        "values": [
          29.9,
          22.22,
          1.47,
          8.44
        ]
      },
      {
        "method": "IS-Fusion",
        "values": [
          47.75,
          39.21,
          4.47,
          27.18
        ]
      },
      {
        "method": "FocalsConv",
        "values": [
          52.07,
          39.63,
          3.07,
          21.05
        ]
      },
      {
        "method": "UniTR",
        "values": [
          null,
          null,
          null,
          null
        ]
      }
    ]
  },
  "videos": []
};
