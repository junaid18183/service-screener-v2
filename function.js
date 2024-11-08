function handler(event) {
    var crypto = require('crypto');
    var headers = event.request.headers;
    // var wlist_ips = [
    //     "1.1.1.1",
    //     "2.2.2.2"
    // ];
    // printf "Basic $(printf 'vivsoft:TrumpT0w5r' | base64 -w 0)" | sha256sum | awk '{print$1}'
    var authString = "9c06d532edf0813659ab41d26ab8ba9ca53b985296ee4584a79f34fe9cd743a4";
    if (
        typeof headers.authorization === "undefined" ||
        crypto.createHash(
          'sha256'
          ).update(headers.authorization.value).digest('hex') !== authString
    ) {
        // if (
        //     !wlist_ips.includes(event.viewer.ip)
        // ) {
            return {
                statusCode: 401,
                statusDescription: "Unauthorized",
                headers: {
                    "www-authenticate": { value: "Basic" },
                    "x-source-ip": { value: event.viewer.ip}
                }
            };
        }
    }
    return event.request;
}