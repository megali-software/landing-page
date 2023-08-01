async function copyURL() {
  try {
    // Use the Clipboard API to write the text to the clipboard
    await navigator.clipboard.writeText(window.location.href);

    // Optionally, alert the user that the URL was copied
    alert("URL copied to clipboard");
  } catch (err) {
    // Handle any errors
    console.error("Failed to copy URL:", err);
  }
}
