let islike = false;
let iscomment = false;
let isshare = false;
let ispost = false;
let isArchived = false;

// Like functionality
async function likecode() {
    return new Promise((liked, alreadyliked) => {
        if (!islike) {
            islike = true;
            liked("Liked the post successfully.");
        } else {
            alreadyliked("You already liked the post.");
        }
    });
}

async function unlikecode() {
    return new Promise((resolve, reject) => {
        if (islike) {
            islike = false;
            resolve("Like removed successfully.");
        } else {
            reject("You have not liked the post yet.");
        }
    });
}

// Comment functionality
async function commentcode() {
    return new Promise((commentposted, alreadycommented) => {
        if (!iscomment) {
            iscomment = true;
            commentposted("Comment posted successfully on the post.");
        } else {
            alreadycommented("You already commented on this section.");
        }
    });
}

async function uncommentcode() {
    return new Promise((resolve, reject) => {
        if (iscomment) {
            iscomment = false;
            resolve("Comment removed successfully.");
        } else {
            reject("You have not commented on this post yet.");
        }
    });
}

// Share functionality
async function sharecode() {
    return new Promise((shared, alreadyshared) => {
        if (!isshare) {
            isshare = true;
            shared("Post shared successfully.");
        } else {
            alreadyshared("You already shared the post.");
        }
    });
}

async function unsharecode() {
    return new Promise((resolve, reject) => {
        if (isshare) {
            isshare = false;
            resolve("Share removed successfully.");
        } else {
            reject("You have not shared this post yet.");
        }
    });
}

// Archive functionality
async function archivecode() {
    return new Promise((archived, alreadyArchived) => {
        if (!isArchived) {
            isArchived = true;
            archived("Post archived successfully.");
        } else {
            alreadyArchived("Post is already archived.");
        }
    });
}

async function unarchivecode() {
    return new Promise((resolve, reject) => {
        if (isArchived) {
            isArchived = false;
            resolve("Post unarchived successfully.");
        } else {
            reject("Post is not archived yet.");
        }
    });
}

// Create post functionality
async function createPost() {
    const post = new Promise((cpost) => {
        cpost("Post created successfully.");
    });

    await Promise.all([post, commentcode(), likecode(), sharecode(), archivecode()])
        .then(([post, comment, like, share, archive]) => {
            console.log(post);
            console.log(comment);
            console.log(like);
            console.log(share);
            console.log(archive);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Remove post functionality
async function removepost() {
    const unpost = new Promise((rpost) => {
        rpost("Post removed successfully.");
    });

    await Promise.all([unpost, uncommentcode(), unlikecode(), unsharecode(), unarchivecode()])
        .then(([unpost, uncomment, unlike, unshare, unarchive]) => {
            console.log(unpost);
            console.log(uncomment);
            console.log(unlike);
            console.log(unshare);
            console.log(unarchive);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Run the functions
createPost();

setTimeout(() => {
    console.log("Removing post...");
    removepost();
}, 2000);