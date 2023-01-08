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
### Screenshot
Signup or signin page:
![WhatsApp Image 2023-01-08 at 6 02 58 PM (1)](https://user-images.githubusercontent.com/57415694/211197731-23bdd7cf-ae99-40ce-96f1-a48fe4d00ac9.jpeg)

After signing in user lands on Home Page:
![WhatsApp Image 2023-01-08 at 6 02 58 PM](https://user-images.githubusercontent.com/57415694/211197779-900c5961-f547-438f-92bc-70cb8e01db5d.jpeg)

One-to-One chat:
![WhatsApp Image 2023-01-08 at 6 02 58 PM (2)](https://user-images.githubusercontent.com/57415694/211197797-cd0710d2-89ea-4eae-98fd-385212088f41.jpeg)

Group chat(as Admin):
![WhatsApp Image 2023-01-08 at 6 02 58 PM (3)](https://user-images.githubusercontent.com/57415694/211197817-db0fef9b-55be-4cf4-b9ed-891f25716c83.jpeg)

Group Chat(as added member in the group, if you can not send message):
![WhatsApp Image 2023-01-08 at 6 02 58 PM (4)](https://user-images.githubusercontent.com/57415694/211197839-dea5c7bd-339b-4bbb-838d-4a444d38a269.jpeg)

Create Group Chat Modal:
![WhatsApp Image 2023-01-08 at 6 02 58 PM (5)](https://user-images.githubusercontent.com/57415694/211197850-1e527615-85af-4ecd-ac6e-10d0a8d9dca9.jpeg)


## Author

[Bhargab Nath](https://github.com/Bucephalus-lgtm)
