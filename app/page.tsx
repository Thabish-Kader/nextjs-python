import { UserInputs } from "@/components/UserInputs";
import { exec } from "child_process";

exec("echo how are you", (err, stdout, stderr) => {
	if (err) {
		console.error(`exec error: ${err}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
});

export default function Home() {
	return (
		<main className="bg-zinc-900 h-screen">
			<UserInputs />
		</main>
	);
}
