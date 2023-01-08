<h1 align="center">
🌐 StreetChat
</h1>
<p align="center">
A random chat app built using the <b> MERN and Socket.io </b>
</p>

> - You register yourself to the website and then login.
> - You can search user and start one-to-one conversation with the user.
> - Create a group and have group conversation.
> - Get notification(s) for all incoming messages.
> - Group Authorization is implemented, so if you are admin, you can restrict other users not allowing to send message to the group.
> - Only admin have the rights to either add another member to the group conversation or remove him or set the restriction of preventing to send message.
> - Check if your friend is online or offline.

## Clone or Download

```terminal
First clone the git repository...
$ git clone https://github.com/Bucephalus-lgtm/streetchat

In the root directory, run
$ npm i

Then change your current directory to frontend by running...
$ cd frontend/
$ npm i

If npm i throws error, please run the following command
$ npm i --legacy-peer-deps
```

# Usage (run the app on your machine)

## Prerequisites

- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

## Client-side usage(PORT: 3000)

```terminal
$ cd frontend       
$ npm run start  
```

## Server-side usage(PORT: 5000)

### Prepare your secret

You need to create a .env file in the root directory and add all the values of the keys present in .env.example file

### Start

```terminal
// In the root directory
$ npm run dev
```

# Screenshots of this project

User sign in or sign up:

![1673179335813](https://file+.vscode-resource.vscode-cdn.net/c%3A/Users/Bhargab%20Nath/Desktop/Nodejs%20Programs/FrontPage_Assignment/image/README/1673179335813.png)

After signing in user lands on Home Page:

![1673179296887](https://file+.vscode-resource.vscode-cdn.net/c%3A/Users/Bhargab%20Nath/Desktop/Nodejs%20Programs/FrontPage_Assignment/image/README/1673179296887.png)

One-to-One chat:

![1673179655451](image/README/1673179655451.png)

Group chat(as Admin)

![1673179698330](image/README/1673179698330.png)

Group Chat(as added member in the group, if you can not send message):

![1673180361111](image/README/1673180361111.png)

Create Group Chat Modal:

![1673179915542](image/README/1673179915542.png)

## Author

[Bhargab Nath](https://github.com/Bucephalus-lgtm)
