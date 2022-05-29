import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imageSrc = 'assets/header-logo.png';
  messageTitle = 'Rondeivu';
  messageText =
    'Rondeivu is an end-to-end deal platform for modernizing the syndication of institutional quality private placements and GP-led transactions, leveraging the best technology available to improve alignment, speed, and transparency for both Issuers and Institutional Investors.';

  steps = [
    {
      imageUrl: 'assets/header-logo.png',
      title: '1',
      text: 'Rondeivu is an end-to-end deal platform for modernizing the syndication of institutional quality private placements and GP-led transactions, leveraging the best technology available to improve alignment, speed, and transparency for both Issuers and Institutional Investors.',
      messageTop: 'Rondeivu',
    },
    {
      imageUrl: 'assets/Our-services.png',
      title: '2',
      text: 'We are leveraging decades of investment experience, and a broad network of Issuers and Institutional Investors that are seeking improved origination, transparency, and syndication of deals across',
      messageTop: 'Services',
    },
    {
      imageUrl: 'assets/Investment Banking.png',
      title: '3',
      text: 'Rondeivu’s technology is purpose built for private placements / direct deals, GP-led co-investments, alternatives funds, GP-stakes and seeding opportunities.',
      messageTop: 'Issuer',
    },
    {
      imageUrl: 'assets/Investor.png',
      title: '4',
      text: 'Rondeivu leverages decades of investing experience to originate, vet, and curate institutional quality deal flow with the investor’s objectives solely in mind.',
      messageTop: 'Investor',
    },
  ];
  title = 'rondeivu';

  onClick(number: any) {
    this.imageSrc = number.imageUrl;
    this.messageTitle = number.messageTop;
    this.messageText = number.text;
  }
}
