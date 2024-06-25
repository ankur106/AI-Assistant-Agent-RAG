
import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
// import * as path from 'path';
// import * as fs from 'fs';
import { FunctionTool, JSONValue } from 'llamaindex';
import { Events, GEvent } from './helper/calender';
 
// import credentials from './credentials/credentials.json';

// const CREDENTIALS_PATH = path.resolve(__dirname, '../data/credentials.json');

// const content = fs.readFileSync(CREDENTIALS_PATH, 'utf-8');
// const credentials = JSON.parse(content);










//INFO:: Without Gsuite I cannot add attendees, so leaving it for right now
const insertCalanderEvent = async (gEvent: GEvent) => {
  // create client that we can use to communicate with Google 
  const client = new JWT({
    email: process.env.CALENDAR_PRIVATE_KEY,
    key: process.env.GCLIENT_EMAIL,
    scopes: [ // set the right scope
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events',
    ],
    subject: 'support@maya-ai-assitant.iam.gserviceaccount.com'
  });

  const calendar = google.calendar({ version: 'v3' });

  // We make a request to Google Calendar API.

  try {
    const res = await calendar.events.insert({
      calendarId: 'c18ead7e9aa8cf0cd3185aa1d0a5346ac5bdec3bf8feff8f6d91a32df2419f50@group.calendar.google.com',
      auth: client,
      requestBody: gEvent
    });
    return res;
  } catch (error) {
    throw new Error(`Could not create event: ${(error as any).message}`);
  }
};



const fetchCalanderEvent = async (days  : number = 2 ) : Promise<JSONValue> => {


  // create client that we can use to communicate with Google 
  const credential = JSON.parse(
    Buffer.from(process.env.CALENDAR_CREDENTIALS!, "base64").toString()
  );
  


  const client = new JWT({
    email: credential.client_email,
    key: credential.private_key,
    scopes: [ // set the right scope
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events',
    ],
    subject: 'support@maya-ai-assitant.iam.gserviceaccount.com'
  });

  const calendar = google.calendar({ version: 'v3' });

  // We make a request to Google Calendar API.
  let blockedTimes : Events[] = [];
  try {
    let now = new Date();
    console.log(now);
    let twoDaysLater = new Date();
    twoDaysLater.setDate(now.getDate() + 2);
    const res = await calendar.events.list({
      calendarId: 'c18ead7e9aa8cf0cd3185aa1d0a5346ac5bdec3bf8feff8f6d91a32df2419f50@group.calendar.google.com',
      auth: client,
        timeMin: now.toISOString(),
        timeMax : twoDaysLater.toISOString(),
        // showDeleted: false,
        singleEvents: true,
        maxResults: 100,
        orderBy: 'startTime',
      
    });

    const events = res.data.items;

    events!.reduce((arr,item) => {
      let obj = {
        start : item!.start!.dateTime!,
        end : item!.end!.dateTime!
      }
      arr.push(obj);
      return arr;
    },blockedTimes)

    
  } catch (error) {
    throw new Error(`Could not create event: ${(error as any).message}`);
  }

  return JSON.stringify({
    "blockedTimes" : blockedTimes
  });
}




export const fetchCalendarEventTool  = new FunctionTool(fetchCalanderEvent, {
  name : "fetchCalanderEvents",
  description: "this function gives unavailable time for the next few days so that user can set a meeting"
});

