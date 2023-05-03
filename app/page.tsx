import { UserInputs } from "@/components/UserInputs";
import { exec } from "child_process";

exec(
	"source virenv/bin/activate && python3 translate.py",
	(error, stdout, stderr) => {
		if (error) {
			console.error(`exec error: ${error}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	}
);

export default function Home() {
	return (
		<main className="bg-zinc-900 h-screen">
			<UserInputs />
		</main>
	);
}
