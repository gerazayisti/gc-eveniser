/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
type Props = { color: string; height?: number | string; width?: number | string;  };

export default function PlatformLogo({ color, height = "auto", width = "auto"}: Props) {
  return (
    <svg height={height} width={width} viewBox="0 0 283 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
         fill="#000000" stroke="none">
        <path
          d="M2740 5110 c0 -5 -24 -22 -52 -36 -92 -46 -196 -138 -229 -201 -46
        -89 -88 -139 -128 -153 -35 -11 -140 -11 -258 2 -6 1 -9 7 -6 15 3 7 1 13 -3
        13 -5 0 -22 11 -38 25 -16 14 -37 25 -46 25 -10 0 -23 7 -30 14 -21 27 -108
        77 -177 104 -59 22 -83 26 -188 26 -117 1 -122 0 -189 -33 -78 -38 -148 -97
        -166 -141 -7 -16 -20 -32 -29 -35 -9 -3 -75 -65 -147 -137 -101 -104 -138
        -149 -169 -208 l-39 -75 -1 -155 c-1 -183 -3 -189 -114 -314 -84 -96 -150
        -143 -211 -151 -25 -4 -52 -9 -60 -12 -8 -3 -24 -8 -35 -10 -46 -8 -114 -39
        -177 -80 -75 -49 -178 -155 -178 -182 0 -24 -37 -71 -56 -71 -10 0 -14 -8 -12
        -22 2 -13 9 -22 16 -20 6 1 12 -7 12 -18 0 -13 -5 -18 -15 -14 -13 5 -15 -31
        -15 -295 l0 -301 24 -11 c14 -7 35 -35 52 -71 20 -42 51 -80 105 -131 l77 -72
        10 -85 c24 -187 33 -311 27 -357 -4 -26 -29 -93 -55 -148 -79 -166 -97 -289
        -59 -406 33 -100 47 -121 130 -194 19 -17 50 -51 70 -75 57 -70 239 -253 291
        -293 86 -65 170 -77 356 -52 58 8 99 -7 185 -68 39 -29 89 -63 110 -76 50 -31
        82 -74 102 -141 10 -30 36 -102 59 -159 36 -93 49 -113 115 -183 50 -53 90
        -86 123 -100 26 -11 48 -27 48 -34 0 -21 57 -18 63 4 4 16 5 16 6 0 1 -17 23
        -18 310 -18 265 0 310 2 315 15 3 8 30 27 61 41 40 19 76 50 132 111 42 46 90
        91 107 100 20 11 76 18 171 23 136 8 189 5 210 -10 42 -31 179 -93 254 -114
        129 -37 211 -36 326 3 77 26 96 37 130 76 22 25 118 124 213 219 212 214 221
        230 231 416 8 134 15 153 74 215 16 17 50 56 75 89 77 96 129 144 185 171 30
        14 57 25 61 25 18 0 177 86 223 121 69 51 97 82 139 151 20 32 42 58 50 58 19
        0 18 46 -1 54 -8 3 -15 12 -15 21 0 8 7 15 15 15 13 0 15 39 15 290 0 191 -3
        290 -10 290 -6 0 -25 30 -42 66 -17 37 -53 89 -78 118 -59 64 -80 104 -80 153
        -1 21 -5 58 -10 83 -5 25 -12 70 -16 100 -3 30 -10 65 -15 78 -11 30 -12 155
        -1 168 11 11 86 195 101 244 19 65 24 157 11 225 -15 79 -63 156 -149 237 -32
        31 -86 88 -119 127 -204 237 -285 287 -457 281 -231 -7 -227 -8 -365 88 -115
        80 -123 94 -150 252 -7 41 -24 102 -37 134 -12 33 -23 64 -23 70 0 27 -151
        226 -171 226 -5 0 -32 14 -59 31 -33 20 -49 36 -46 45 5 12 -49 14 -329 14
        -213 0 -335 -4 -335 -10z"
          fill={color}
        />
      </g>
    </svg>
);
}

