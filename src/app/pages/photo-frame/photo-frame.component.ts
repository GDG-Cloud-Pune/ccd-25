import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-photo-frame",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./photo-frame.component.html",
  styleUrls: ["./photo-frame.component.scss"],
})
export class PhotoFrameComponent implements OnInit {
  @ViewChild("imageUpload") imageUpload!: ElementRef<HTMLInputElement>;
  @ViewChild("userImage") userImage!: ElementRef<HTMLImageElement>;
  @ViewChild("placeholder") placeholder!: ElementRef<HTMLDivElement>;
  @ViewChild("frameContainer") frameContainer!: ElementRef<HTMLDivElement>;

  showUserImage = false;
  showDownloadControls = false;
  showShareContainer = false;
  showUsageTip = false;
  showClearImage = false;
  showUploadLabel = true;

  private posX = 0;
  private framedImageDataUrl: string | null = null;
  private isDragging = false;
  private touchStartX = 0;
  private frameImageSrc = "assets/frames/frame-template.svg";

  ngOnInit() {
    // Component initialization
  }

  onImageUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      try {
        const reader = new FileReader();
        reader.onload = async (e) => {
          if (e.target?.result) {
            this.userImage.nativeElement.src = e.target.result as string;
            this.showUserImage = true;
            this.showDownloadControls = true;
            this.showShareContainer = true;
            this.showUsageTip = true;
            this.showClearImage = true;
            this.showUploadLabel = false;

            this.posX = 0;
            this.updateImagePosition();

            await this.loadImage(e.target.result as string);
            await this.generateFramedImage();
          }
        };
        reader.readAsDataURL(file);
      } catch (error) {
        this.showError(
          "Failed to load the uploaded image. Please try another image.",
        );
        this.resetImageState();
      }
    } else {
      this.showError("No image selected. Please upload an image.");
    }
  }

  onClearImage() {
    this.userImage.nativeElement.src = "";
    this.showUserImage = false;
    this.showDownloadControls = false;
    this.showShareContainer = false;
    this.showUsageTip = false;
    this.showClearImage = false;
    this.showUploadLabel = true;
    this.posX = 0;
    this.framedImageDataUrl = null;
    this.imageUpload.nativeElement.value = "";
  }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    const startX = event.clientX - this.posX;

    const handleMouseMove = (e: MouseEvent) => {
      if (this.isDragging) {
        this.posX = e.clientX - startX;
        this.updateImagePosition();
      }
    };

    const handleMouseUp = () => {
      this.isDragging = false;
      this.generateFramedImage();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    event.preventDefault();
  }

  onTouchStart(event: TouchEvent) {
    if (event.touches.length === 1) {
      this.touchStartX = event.touches[0].clientX;
      event.preventDefault();
    }
  }

  onTouchMove(event: TouchEvent) {
    if (event.touches.length === 1) {
      const touchX = event.touches[0].clientX;
      this.posX += (touchX - this.touchStartX) / 2;
      this.touchStartX = touchX;
      this.updateImagePosition();
      event.preventDefault();
    }
  }

  onTouchEnd() {
    this.generateFramedImage();
  }

  async onDownload() {
    try {
      if (!this.userImage.nativeElement.src) {
        this.showError("No image uploaded. Please upload an image.");
        return;
      }

      if (!this.framedImageDataUrl) {
        await this.generateFramedImage();
      }

      if (this.framedImageDataUrl) {
        const downloadLink = document.createElement("a");
        downloadLink.href = this.framedImageDataUrl;
        downloadLink.download = "cloud_community_days_frame.png";
        downloadLink.click();
      } else {
        this.showError(
          "Failed to generate image. Please check the frame image and try again.",
        );
      }
    } catch (error) {
      this.showError("Failed to download the image. Please try again.");
    }
  }

  async onShareX() {
    const registrationLink = "https://ccd.gdgcloudpune.com/";
    const caption = encodeURIComponent(
      `🚀 Excited to attend Cloud Community Days Pune 2025! ☁️

The biggest cloud event in our city! Can't wait to connect with fellow cloud enthusiasts and learn from industry experts. 💻🌟

If you're passionate about cloud computing, this is THE event to be at! 🔥

Join me: ${registrationLink} 🎯

#ccdpune25 #ccdpune #ccdindia`,
    );

    try {
      if (!this.userImage.nativeElement.src) {
        this.showError("No image uploaded. Please upload an image.");
        return;
      }

      if (!this.framedImageDataUrl) {
        await this.generateFramedImage();
      }

      if (this.framedImageDataUrl) {
        this.onDownload();
        setTimeout(() => {
          window.open(
            `https://twitter.com/intent/tweet?text=${caption}`,
            "_blank",
          );
        }, 500);
      } else {
        this.showError(
          "Failed to generate image for sharing. Please try again.",
        );
      }
    } catch (error) {
      this.showError("Failed to share on X. Please try again.");
    }
  }

  async onShareLinkedIn() {
    const registrationLink = "https://ccd.gdgcloudpune.com/";
    const caption = encodeURIComponent(
      `🚀 Excited to be part of something amazing!

I'm attending Cloud Community Days Pune 2025 - the biggest cloud event in our city! ☁️ This is going to be an incredible opportunity to connect with fellow cloud enthusiasts, learn from industry experts, and dive deep into the latest cloud technologies. 💻

Can't wait to network, learn, and grow with the amazing cloud community in Pune. 🌟 If you're passionate about cloud computing, this is THE event to be at! 🔥

Ready to join me? Register now: ${registrationLink} 🎯

#ccdpune25 #ccdpune #ccdindia`,
    );

    try {
      if (!this.userImage.nativeElement.src) {
        this.showError("No image uploaded. Please upload an image.");
        return;
      }

      if (!this.framedImageDataUrl) {
        await this.generateFramedImage();
      }

      if (this.framedImageDataUrl) {
        this.onDownload();
        setTimeout(() => {
          window.open(
            `https://www.linkedin.com/feed/?shareActive=true&text=${caption}`,
            "_blank",
          );
        }, 500);
      } else {
        this.showError(
          "Failed to generate image for sharing. Please try again.",
        );
      }
    } catch (error) {
      this.showError("Failed to share on LinkedIn. Please try again.");
    }
  }

  private updateImagePosition() {
    const frameWidth = this.frameContainer.nativeElement.offsetWidth;
    const imageWidth = this.userImage.nativeElement.offsetWidth;

    const maxX = (frameWidth - imageWidth) / 2;
    const minX = -(frameWidth - imageWidth) / 2;

    this.posX = Math.max(minX, Math.min(maxX, this.posX));

    this.userImage.nativeElement.style.transform = `translate(${this.posX}px, 0px)`;
    this.userImage.nativeElement.style.transformOrigin = "center center";
  }

  private async generateFramedImage() {
    try {
      const container = this.frameContainer.nativeElement;
      if (!container) {
        this.showError("Frame container not found.");
        return;
      }

      const designedAspectRatio = 2 / 3;
      const pixelRatio = window.devicePixelRatio || 1;

      const canvasWidth = 800 * pixelRatio;
      const canvasHeight = canvasWidth / designedAspectRatio;

      const canvas = document.createElement("canvas");
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        this.showError("Failed to get canvas context.");
        return;
      }

      ctx.scale(pixelRatio, pixelRatio);

      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvasWidth / pixelRatio, canvasHeight / pixelRatio);

      const effectiveWidth = 800;
      const effectiveHeight = effectiveWidth / designedAspectRatio;

      const imgWidth = effectiveWidth * 0.975;
      const imgHeight = effectiveHeight * 0.99;
      const imgX = effectiveWidth * 0.0125;
      const imgY = effectiveHeight * 0.01;

      const userImg = await this.loadImage(this.userImage.nativeElement.src);

      const imgAspectRatio = userImg.width / userImg.height;
      const frameAspectRatio = imgWidth / imgHeight;
      let srcWidth, srcHeight, srcX, srcY;

      if (imgAspectRatio > frameAspectRatio) {
        srcHeight = userImg.height;
        srcWidth = srcHeight * frameAspectRatio;
        srcX = (userImg.width - srcWidth) / 2;
        srcY = 0;
      } else {
        srcWidth = userImg.width;
        srcHeight = srcWidth / frameAspectRatio;
        srcX = 0;
        srcY = (userImg.height - srcHeight) / 2;
      }

      ctx.save();
      ctx.translate(imgX + imgWidth / 2, imgY + imgHeight / 2);
      ctx.translate(this.posX, 0);
      ctx.translate(-imgWidth / 2, -imgHeight / 2);

      ctx.drawImage(
        userImg,
        srcX,
        srcY,
        srcWidth,
        srcHeight,
        0,
        0,
        imgWidth,
        imgHeight,
      );
      ctx.restore();

      let frameImg;
      if (this.frameImageSrc.endsWith(".svg")) {
        const svgString = await this.loadSvgContent(this.frameImageSrc);
        frameImg = await this.loadImage(svgString, true);
      } else {
        frameImg = await this.loadImage(this.frameImageSrc);
      }

      ctx.drawImage(frameImg, 0, 0, effectiveWidth, effectiveHeight);

      this.framedImageDataUrl = canvas.toDataURL("image/png", 1.0);
    } catch (error) {
      this.showError(
        "Failed to generate image. Please ensure the frame image is accessible and try again.",
      );
      console.error(error);
      this.framedImageDataUrl = null;
    }
  }

  private loadImage(src: string, isSvg = false): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      if (isSvg) {
        img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(src);
      } else {
        img.src = src;
      }
    });
  }

  private async loadSvgContent(src: string): Promise<string> {
    try {
      const response = await fetch(src, { mode: "cors" });
      if (!response.ok) throw new Error(`Failed to fetch SVG: ${src}`);
      return await response.text();
    } catch (error) {
      throw new Error(`Error fetching SVG content: ${error}`);
    }
  }

  private showError(message: string) {
    alert(message);
    console.error(message);
  }

  private resetImageState() {
    this.imageUpload.nativeElement.value = "";
    this.userImage.nativeElement.src = "";
    this.showUserImage = false;
    this.showDownloadControls = false;
    this.showShareContainer = false;
    this.showUsageTip = false;
    this.showClearImage = false;
    this.showUploadLabel = true;
  }
}
