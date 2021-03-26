---
title: AWS Log queries and timezones
date: "2021-03-26T08:30:00"
description: Be careful about making AWS Log queries and the startTime and endTime parameters
---

I had a task at my current job that was to extract some information from AWS Logs in a specified period.

Let's say that the period is one day, so the start of the period was '2021-03-26 00:00:00' and the end was '2021-03-26 23:59:59'. So in Python I parsed those strings and transformed them into datetime objects.

When searching the AWS Cloudwatch logs, this would be something like this:

```
response = client.start_query(
    logGroupName='/aws/apigateway/my-app',
    startTime=int(dt_start.timestamp()),
    endTime=int(dt_end.timestamp()),
    queryString='fields @timestamp, @message | filter loggingType = "ERROR"',
    limit=10000
)
```

When I was testing my code I did a manual query in AWS Cloudwatch Insights and compared the results with the results from the code I wrote. To my surprise I was getting different results, the count was different between my code and the AWS console.

So what did happen? The correct results should consider my local timezone UTC-3. The AWS Console was using my local timezone, so the result there was correct.

In my code, when I converted the input string into datetime objects I did not use a timezone. So in the end it was using an UTC time. To fix the problem I needed to convert them using my local timezone.

After changing that, everything worked as expected.
