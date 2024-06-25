export interface GEvent {
    summary: string;
    location: string
    description: string;
    start: {
      dateTime: string;
      timeZone: string;
    };
    end: {
      dateTime: string;
      timeZone: string;
    };
    reminders: {
      useDefault: boolean;
      overrides: { method: 'popup' | 'email'; minutes: number }[];
    };
    attendees: Iattendees[];
    sendUpdates: 'all' | 'externalOnly' | 'none';
  };


  interface Iattendees {
    'email': string;
  }

  export const event: GEvent = {
    'summary': 'Google I/O 2015',
    'location': '800 Howard St., San Francisco, CA 94103',
    'description': 'A chance to hear more about Google\'s developer products.',
    'start': {
      'dateTime': new Date(2024, 6, 16, 15).toISOString(),
      'timeZone': 'America/Los_Angeles'
    },
    'end': {
      'dateTime': new Date(2024, 6, 16, 15, 30).toISOString(),
      'timeZone': 'America/Los_Angeles'
    },
    'attendees': [
      { 'email': 'apate224@asu.edu' }
    ],
    'reminders': {
      'useDefault': false,
      'overrides': [
        { 'method': 'email', 'minutes': 24 * 60 },
        { 'method': 'popup', 'minutes': 10 }
      ]
    },
    sendUpdates: "all"
  };
  
  
  
  
 export interface Events {
    "start" : string,
    "end" : string
  }
  
