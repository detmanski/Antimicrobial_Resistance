# Notes for data cleaning and database
* The data files and database are very large
* There are strict limits on large files
    * Only 1 GB of space to hold them
        * This is not a problem, as they are now finalized (any changes to them count as a whole additional file upload for space)
    * However if mistakes are made, the repository can be deleted to reset this limit
    * Only 1 GB of bandwidth to download them
        * This is a problem, as the database itself is 225 Mb and each download counts toward the 1 GB maximum
        * This means that the database can only be downloaded 3 times
            * We want to ensure that the grader is able to download it if they so desire, so we should not be downloading it from github at all
        * This limit is tied to account; this means that making mistakes with the download would require a different person to host the repository, and if mistakes are made both I and Dianne will both be capped out and unable to host this for download (I figured this out through trial and error, so I'm capped on bandwidth)
* Currently, the data and database are not available in this repository; I will make them avaialble to you via my personal OneDrive
* Once everything is finalized, I or someone else can upload the final database for grading
    * The idea would be that none of us download the database from the repository
    * We can use it from local files on our computers, and initially access through my OneDrive
    * At the very end, when everything is done, the database can be uploaded