export default defineEventHandler(async (event) => {
  try {
    const response = await $fetch(
      "https://www1.minuc.se/forlustanmalan?expand=*",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    sendError(event, error);
  }
});
