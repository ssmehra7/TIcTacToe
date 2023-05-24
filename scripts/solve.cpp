#include<bits/stdc++.h>
using namespace std;

vector<int> decimaltobinary(int n){
    vector<int> a;
    if(n==0){
        a.push_back(0);
        return a;
    }
    while (n!=0){
        int temp =n%2;

        a.push_back(temp);

        n/=2;

    }

    reverse(a.begin(),a.end());

        return a;


}


int binarytodecimal (vector<int> a){
    reverse(a.begin(),a.end());
    int result=0;
    for (int i=0;i<a.size();i++){
        result +=pow(2,i)*a[i];
    }

    return result;
}
int main()
{

    int n;
    cin>>n;
    vector<int> a=decimaltobinary(n);
    for (int i=0;i<a.size();i++){
        cout<<a[i];
    }

    cout<<endl;
    for (int i=0;i<a.size();i++){
            if (a[i]==1){
                a[i]=0;
            }else{
                a[i]=1;
            }
        }

    for (int i=0;i<a.size();i++){
        cout<<a[i];
    }

    cout<<endl;

        
    int result =binarytodecimal(a);


    cout<<result<<endl;

   
 return 0;
}