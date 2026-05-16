# ServicesHub Mobile (Expo)

## Navigation skeleton
- Auth stack: Login, Signup
- Customer tabs: Home, Bookings, Profile
- Provider tabs: Requests, Active Job, Earnings/Profile
- Map screen included

## OSM tiles
Map screen uses `react-native-maps` with OpenStreetMap tiles:
`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`.

If a platform/device has tile restrictions, keep native provider map and overlay OSM-like fallback UX via provider location cards and manual address selection.
