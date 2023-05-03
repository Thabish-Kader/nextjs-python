"use client";
import React, { useState } from "react";

export const UserInputs = () => {
	const [text, setText] = useState("");
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				console.log(text);
				setText("");
			}}
			className="flex items-center justify-center h-full space-x-2"
		>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				className="bg-transparent border border-white rounded-lg px-2 py-1 text-white"
			/>
			<button className="px-2 py-1 border text-white rounded-lg">
				Translate
			</button>
		</form>
	);
};
