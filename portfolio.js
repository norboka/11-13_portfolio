document.getElementById("scrollToBottomBtn").addEventListener("click", function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});

