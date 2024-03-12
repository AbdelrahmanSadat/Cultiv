## Installation
- Simply `cd` into the api dir in one terminal, and the front dir in another.
- Run `npm i` in both dirs.
- Run `npm run dev` in both dirs.

App should be running [here](http://localhost:3000)

(I did deploy the env files to avoid the overhead. Please don't try that at home or in production).

## Notes on Development
I've made sure to focus on the quality of the code, and let everything else be as simple as possible.

### Caveats
You'll notice a couple of missing features:
- Image upload
- Authentication

The authentication has a basic implementation in the backend (see `authController.ts`). While image upload is not implemented at all.

This is only because of time conflicts (I had less time to work on the task than given). I'm sure whatever skills you want to measure are on display in the rest of the code. So if you'd be kind enough to judge only the parts I've submitted, it would reflect my work much better.

I do hope that whatever missing quantity is made up for with the code quality of what I've submit.

### What I Wanted to Add
If I had one more day working on this I would confidently:
- Add authentication forms and middleware
- Write more tests (more coverage in api tests, and functional tests in the frontend)
- Better validation & error messages (goes hand to hand with the tests)
- Dockerize the app (a `dockerfile` for each dir, and a compose to integrate them)
- Deploy a live demo (frontend on vercel, backend on an ec2 instance)


Thank you for your time and understanding. And if you have any questions about the code or otherwise, please let me know.
