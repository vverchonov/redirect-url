// document.addEventListener("DOMContentLoaded", () => {
//   const iframe = document.getElementById("controlledIframe");
//   const allowedDomains = ["pump.fun", "dexscreener.com"];

//   iframe.onload = () => {
//     try {
//       const iframeDocument =
//         iframe.contentDocument || iframe.contentWindow.document;

//       const interceptClicks = (event) => {
//         const link = event.target.closest("a");
//         if (link && link.target === "_blank") {
//           const url = new URL(link.href);
//           const domain = url.hostname;

//           if (!allowedDomains.includes(domain)) {
//             event.preventDefault();
//             console.log(
//               "Opening new tabs is forbidden for this domain:",
//               link.href
//             );
//           } else {
//             console.log("Opening new tab allowed for:", link.href);
//           }
//         }
//       };

//       iframeDocument.addEventListener("click", interceptClicks);
//     } catch (error) {
//       console.error("Error accessing iframe content:", error);
//     }
//   };
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const iframe = document.getElementById("controlledIframe");
//   const allowedDomains = ["pump.fun", "dexscreener.com"];

//   iframe.onload = () => {
//     try {
//       const iframeDocument =
//         iframe.contentDocument || iframe.contentWindow.document;

//       const interceptClicks = (event) => {
//         const link = event.target.closest("a");
//         if (link) {
//           const url = new URL(link.href);
//           const domain = url.hostname;
//           console.log("IM HERE !!!!!");
//           // Prevent new tab if the Alt key is pressed or if the domain is not allowed
//           if (
//             event.altKey ||
//             event.ctrlKey ||
//             event.metaKey ||
//             !allowedDomains.includes(domain)
//           ) {
//             console.log("IM HERE 22222!!!!!");
//             event.preventDefault();
//             console.log("Opening new tabs is forbidden:", link.href);
//           } else {
//             console.log("IM HERE 33333!!!!!");
//             console.log("Opening link:", link.href);
//           }
//         }
//       };

//       iframeDocument.addEventListener("click", interceptClicks);
//     } catch (error) {
//       console.error("Error accessing iframe content:", error);
//     }
//   };
// });

$("iframe").load(function () {
  $("iframe")
    .contents()
    .find("a")
    .each(function (index) {
      $(this).on("click", function (event) {
        console.error("here");
        event.preventDefault();
        event.stopPropagation();
      });
    });
});
