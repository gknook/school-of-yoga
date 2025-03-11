import { google } from "googleapis";
// import { authenticate } from "@google-cloud/local-auth";

export default defineEventHandler(async event => {
  // const auth = await authenticate({
  //   keyfilePath: "path/credentials.json",
  //   scopes: ["https://www.googleapis.com/auth/calendar.readonly"]
  // });

  const calendar = google.calendar({ version: "v3" });

  const res = await calendar.events.list({
    calendarId: "kvsfpb2o5imk9os9s6j70gsb8s@group.calendar.google.com",
    timeMin: new Date().toISOString(),
    maxResults: 5,
    singleEvents: true,
    orderBy: "startTime",
    key: "AIzaSyCmN3pJ9QOrSnB_sIBoV-AzP8lGW4V5bqo"
  });

  return res.data.items;
});
