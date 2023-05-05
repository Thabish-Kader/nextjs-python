import { UserInputs } from "@/components/UserInputs";
import { exec, spawn, fork } from "child_process";

// EXEC Example
// exec("echo how are you", (err, stdout, stderr) => {
// 	if (err) {
// 		console.error(`exec error: ${err}`);
// 		return;
// 	}
// 	console.log(`stdout: ${stdout}`);
// });

// SPAWN Example
// const child = spawn("echo", ["how", "are", "you"]);

// child.stdout.on("data", (data) => {
// 	console.log(`stdout: ${data}`);
// });

// child.stderr.on("data", (data) => {
// 	console.error(`stderr: ${data}`);
// });

// child.on("close", (code) => {
// 	console.log(`child process exited with code ${code}`);
// });

// FORK Example
// const child = fork("./echo.ts", ["how", "are", "you"]);

// child.on("message", (msg) => {
// 	console.log(`stdout: ${msg}`);
// });

// child.on("close", (code) => {
// 	console.log(`child process exited with code ${code}`);
// });

export default function Home() {
	return (
		<main className="bg-zinc-900 h-screen">
			<UserInputs />
		</main>
	);
}
