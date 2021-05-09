---
title: My AWS Lambda Notes
date: "2021-05-09T08:30:00"
description: Some notes I wrote about AWS Lambda
---

- At the moment of this writing, AWS Lambda has a time limit of 15 minutes. What does it mean? If the Lambda is processing something and the execution reaches 15 minutes long, the process will be killed instantly.

- When dealing with async calls (like in Node.js), it's important that at some point of the code there is a command to wait the completion of the async calls. This happens because, in AWS Lambda, after all the sync commands were executed it will terminate the execution without waiting for the end of the async calls.

- AWS Lambda instances start up and shutdown many times. In some cases, there must be considered the start up time of your application, so that it doesn't waste a long time until it is ready to process something. The start up time depends of the programming language and frameworks that are being used.
