export default {
  async fetch(request) {
    const pin = new URL(request.url).searchParams.get("pin");

    if (pin === "1234") {
      return new Response("<h1>Welcome!</h1><p>Secret content here.</p>",
        { headers: { "content-type": "text/html" } });
    }

    return new Response(
      `<h1>Password required</h1>
       <p>Enter a 4-digit PIN by adding ?pin=XXXX to this URL.</p>
       <form method="get"><input name="pin" maxlength="4"><button>Enter</button></form>`,
      { status: 401, headers: { "content-type": "text/html" } });
  }
};
