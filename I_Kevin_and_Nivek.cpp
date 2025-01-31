#include <bits/stdc++.h>
using namespace std;

// Macros for convenience
#define ll long long // Alias for long long data type
#define vi(x) vector<int> x // Declare a vector of integers
#define vll(x) vector<ll> x // Declare a vector of long long
#define vs(x) vector<string> x // Declare a vector of strings
#define vpll(x) vector<pair<ll, ll>> x // Declare a vector of pairs (int, int)
#define vplb(x) vector<pair<ll, bool>> x // Declare a vector of pairs (int, bool)
#define mp(mp) unordered_map<int,bool>mp
#define pb push_back // Shortcut for push_back
#define mp make_pair // Shortcut for make_pair
#define F first      // Shortcut to access the first element of a pair
#define S second     // Shortcut to access the second element of a pair
#define all(x) x.begin(), x.end() // Access the entire range of a container
#define rall(x) x.rbegin(), x.rend() // Reverse iterator for the entire range
#define endl '\n'

#define fo(i, n) for (ll i = 0; i < n; i++) // Shortcut for a for loop
#define rep(i, a, b) for (int i = a; i < b; i++) // Loop from a to b-1

#define sortv(x) sort(all(x)) // Sort a vector in ascending order
#define rsortv(x) sort(rall(x)) // Sort a vector in descending order
#define uniq(x) x.erase(unique(all(x)), x.end()) // Remove duplicates from a sorted vector

#define sum(x) accumulate(all(x), 0LL) // Sum of vector elements (supports long long)
#define minVector(x) *min_element(all(x)) // Minimum element in a vector
#define maxVector(x) *max_element(all(x)) // Maximum element in a vector

#define dbg(x) cout << #x << " = " << x << endl; // Debugging macro

#define mod 1000000007 // Common modulus for modular arithmetic
#define inf 1e9 // Large value (Infinity)

// GCD and LCM
#define gcd(a, b) __gcd(a, b) // Compute GCD
#define lcm(a, b) (a / gcd(a, b) * b) // Compute LCM
#define fastio() ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)

// Function to print a vector
void printV(const vector<ll> &v) {
    for (ll i : v) {
        cout << i << " ";
    }
    cout << endl;
}

// Function to print a 2D vector
void print2D(const vector<vector<ll>> &v) {
    for (const auto &row : v) {
        for (int x : row) {
            cout << x << " ";
        }
        cout << endl;
    }
}

//Prefix sum vector
vector<ll> computePrefixSum(const vector<ll> &arr) {
    vector<ll> prefixSum(arr.size() + 1, 0); // Initialize with 0, size n+1
    for (size_t i = 0; i < arr.size(); ++i) {
        prefixSum[i + 1] = prefixSum[i] + arr[i];
    }
    return prefixSum;
}

// Fast exponentiation
ll power(ll base, ll exp, ll m = mod) {
    ll result = 1;
    while (exp > 0) {
        if (exp % 2 == 1)
            result = (result * base) % m;
        base = (base * base) % m;
        exp /= 2;
    }
    return result;
}

// Check if a number is prime
bool isPrime(ll n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (ll i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

// Solve function for each test case
void solve() {
    int n;
    cin >> n;
    vll(arr);
    fo(i, n) {
        ll e;
        cin >> e;
        arr.pb(e);
    }
}

int main() {
    fastio();
    ll t=1; // Number of test cases
    cin >> t;
    while (t--) {
        solve();
    }

    return 0;
}