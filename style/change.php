<?php
function changePermissions($path, $filePermissions, $dirPermissions) {
    $dir = new RecursiveDirectoryIterator($path, RecursiveDirectoryIterator::SKIP_DOTS);
    $files = new RecursiveIteratorIterator($dir, RecursiveIteratorIterator::SELF_FIRST);

    foreach ($files as $file) {
        if ($file->isFile()) {
            chmod($file, $filePermissions);
        } elseif ($file->isDir()) {
            chmod($file, $dirPermissions);
        }
    }
}

// Specify the directory path you want to change permissions for
$directoryPath = '/home/your_account/public_html';

// Specify the permissions you want to set (e.g., 644 for files, 755 for directories)
$filePermissions = 0644;
$dirPermissions = 0755;

// Call the function to change permissions recursively
changePermissions($directoryPath, $filePermissions, $dirPermissions);
?>