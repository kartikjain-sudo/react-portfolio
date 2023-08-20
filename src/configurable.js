export const socialMedia = {
  linkedIn: 'https://www.linkedin.com/in/kartikjain42/',
  github: 'https://github.com/kartikjain-sudo',
  medium: 'https://medium.com/@kartikjain42',
  insta: 'https://www.instagram.com/',
  twitter: 'https://twitter.com/kartikjn_925',
};

export const user = {
  name: 'Kartik Jain',
  email: 'kartikjain42@protonmail.com',
  address: {
    country: 'India',
    city: 'Delhi',
    x_coordinates: '28.6129',
    y_coordinates: '77.2295',
  },
};

export const job_array = [
  [
    'B',
    'l',
    'o',
    'c',
    'k',
    'c',
    'h',
    'a',
    'i',
    'n',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ],
  [
    'B',
    'a',
    'c',
    'k',
    'e',
    'n',
    'd',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ],
  [
    'B',
    'l',
    'o',
    'c',
    'k',
    'e',
    'n',
    'd',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ],
]; // [Blockchain Developer, Backend Developer, Blockend Developer]
export const what_you_do =
  'Solidity | Rust | Backend Developer | Content Writer';

export const first_name_without_first_letter_array = (name) => {
  const firstWord = name.split(' ')[0];
  return Array.from(firstWord).slice(1);
}; // ['a', 'r', 't', 'i', 'k']
