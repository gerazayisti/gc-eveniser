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

export const SITE_URL = 'https://gc-eveniser-niou.vercel.app';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const LINKEDIN_USER_NAME = 'gervais-azanga-ayissi-183252233';
export const BRAND_NAME = 'GC-Evenizer';
export const SITE_NAME_MULTILINE = ['GC-Evenizer', 'Event'];
export const SITE_NAME = 'GC-Evenizer Event';
export const META_DESCRIPTION =
'GC-Evenizer is an open-source platform where Next.js developers can contribute and adapt it for event management. Created through the collaboration of marketers, designers, and developers at Vercel, it offers a robust and flexible foundation.'
export const SITE_DESCRIPTION =
  'An interactive online experience by the G-CONNECT IT community, free for everyone.';
export const DATE = '12 January 2025';
export const SHORT_DATE = 'Jan 12 - 9:00am PST';
export const FULL_DATE = 'Jan 12th 9am central africa Time (GMT+1)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/gerazayisti/gc-eveniser';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
 {
    name: 'Live Session',
    route: '/stage/a'
  },
/*{
  name: 'Vercel Stage',
  route: '/stage/c'
},
{
  name: '100ms Stage',
  route: '/stage/m'
},*/
{
  name: 'Schedule',
  route: '/schedule'
},
{
  name: 'Speakers',
  route: '/speakers'
},
{
  name: 'Expo',
  route: '/expo'
},
{
  name: 'Jobs',
  route: '/jobs'
}
];

export type TicketGenerationState = 'default' | 'loading';
