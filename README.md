# Next Js + Python Automation

A very small project to learn how to execute python script in Next js.

## Learning outcomes

-   exec() runs in the same instance of the terminal whereas spawn() and fork() run in different instancce
-   useing spawn() and fork() is better when haveing large outputs.

## Usecases for fork(), spawn() and exec()

-   fork() : used to create Node.js process to run a **sperate module** and can communicate with the parent process useing message channels
-   spawn() : used to run commands and scripts in a **new** instance of terminal
-   exec : useused to run commands and scripts in the **same** instance of terminald
