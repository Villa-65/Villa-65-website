<?php
define('BASE', realpath(__DIR__));

if (empty($_GET['image'])) {
	// No image was provided, so we exit.
	die();
}

$image = $_GET['image'];

if (strpos(realpath($image), BASE) !== 0) {
    echo 'An invalid path was requested.';
} else {
	/**
	 * Thumbnail size in pixels.
	 * @var integer
	 */
	define('THUMB_SIZE', 200);

	/**
	 * Get the size of an image.
	 * @param string $image - File name of the image.
	 */
	function image_get_size($image) {
		return @getimagesize($image);
	}

	/**
	 * Get the width of an image.
	 * @param string $image - File name of the image.
	 */
	function image_get_width($image) {
		return @getimagesize($image)[0];
	}

	/**
	 * Get the height of an image.
	 * @param string $image - File name of the image.
	 */
	function image_get_height($image) {
		return @getimagesize($image)[1];
	}

	/**
	 * Get the type of an image.
	 * @param string $image - File name of the image.
	 */
	function image_get_type($image) {
	  return @getimagesize($image)[2];
	}

	/**
	 * Get the <tt>imagecreatefrom...</tt> function corresponding to an image.
	 * @param string $image - File name of the image.
	 * @return callable
	 */
	function image_get_gd_function($image) {
		$image_type = image_get_type($image);
		$functions = [
			IMAGETYPE_GIF => 'imagecreatefromgif',
			IMAGETYPE_JPEG => 'imagecreatefromjpeg',
			IMAGETYPE_PNG => 'imagecreatefrompng',
			IMAGETYPE_BMP => 'imagecreatefrombmp',
			IMAGETYPE_WBMP => 'imagecreatefromwbmp',
			IMAGETYPE_XBM => 'imagecreatefromxbm'
		];
		foreach ($functions as $type => $function) {
			if ($image_type === $type) {
				return $function;
			}
		}

		return false;
	}

	/**
	 * Generate the thumbnail of an image, if it does not exist yet.
	 * @param string $image - File name of the image.
	 * @return string - Location of the thumbnail.
	 */
	function image_get_thumbnail($image) {
		global $image, $file;
		$func = image_get_gd_function($image);

		if ($func === false) {
			return;
		}
		
		$thumb_file = CACHE_DIR . sha1_file($image) . '.jpg';
		if (file_exists($thumb_file)) {
			return $thumb_file;
		}

		$im = $func($image);

		$new = imagecreatetruecolor(THUMB_SIZE, THUMB_SIZE);

		$width = image_get_width($image);
		$height = image_get_height($image);

		$ratio = $height / $width;

		if ($ratio > 1) {
			// Height is too big, relative to thumb it's "portrait".
			$size = $width;
			$origin_x = 0;
			$origin_y = (THUMB_SIZE / $width) * ($height - $width) * .5;
		} else {
			// Width is too big, relative to thumb it's "landscape".
			$size = $height;
			$origin_x = (THUMB_SIZE / $height) * ($width - $height) * .5;
			$origin_y = 0;
		}

		// Generate the thumbnail image.
		imagecopyresampled($new, $im, 0, 0, $origin_x, $origin_y, THUMB_SIZE, THUMB_SIZE, $size * (THUMB_SIZE / THUMB_SIZE), $size);

        $exif = exif_read_data($image);
        if(!empty($exif['Orientation'])) {
            switch($exif['Orientation']) {
                case 8:
                    $new = imagerotate($new,90,0);
                    break;
                case 3:
                    $new = imagerotate($new,180,0);
                    break;
                case 6:
                    $new = imagerotate($new,-90,0);
                    break;
            }
        }

		// Store the new thumbnail image.
		imagejpeg($new, $thumb_file);
		return $thumb_file;
	}
	// basename: /some/../path/image.jpg -> image.jpg. Prevents our script from
	// accidentally "thumbnailing" files it should not be able to see.
	
    /**
	 * Directory where our images can be found.
	 * @var string
	 */
	define('IMG_DIR', __DIR__.'/'.str_replace(basename($image), '', $image));
  
	/**
	 * Directory where we store cached thumbnails.
	 * @var string
	 */
	define('CACHE_DIR', __DIR__.'/'.str_replace(basename($image), '', $image).'thumbs/');
  
	// Get the absolute file name of the image.
	$file = IMG_DIR.basename($image);
	
	if (!file_exists(CACHE_DIR)) {
		mkdir(CACHE_DIR);
	}
  
	// Generate the thumbnail, or retrieve it from cache.
	$thumb = image_get_thumbnail($file);

	// Output it to the browser.
	header('Content-Type: image/jpg');
	readfile($thumb);
}
