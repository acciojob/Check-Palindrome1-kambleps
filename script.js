// complete the given function

function palindrome(str){
	str.toLowerCase();
	let verdict = true;
	for(let i=0;i<str.length;i++)
		{
			for(let j=str.length;j>0;j--)
				{
					if(String[i] !== String[j])
					{
						verdict=false;
					}
				}
		}
	return verdict;
}
const string = str.toLowerCase();
	const len = str.length;
	for(let i=0;i<len/2;i++)
		{
			if(str[i] !== str[len-1-i])
			{
				return false;
			}
		}
         return true;
}
module.exports = palindrome
