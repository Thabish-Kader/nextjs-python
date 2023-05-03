import { NextResponse } from "next/server";
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

export async function POST(request: Request) {
	const { text } = await request.json();
	const translatedText = text + " - from server";
	return NextResponse.json({ translatedText });
}
