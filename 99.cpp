#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

// Функция для проверки, является ли число простым
bool is_prime(int num) {
  if (num < 2) return false;
    for (int i = 2; i <= sqrt(num); i++) {
      if (num % i == 0) return false;
    }
       return true;
}

// Рекурсивная функция для подсчета сумм
void count_prime_sums(const vector<int>& s, int k, int index, int current_sum, int& count) {
  if (k == 0) {
    if (is_prime(current_sum)) {
            count++;
        }
        return;
    }
    for (int i = index; i < s.size(); i++) {
      count_prime_sums(s, k - 1, i + 1, current_sum + s[i], count);
    }
}

int main() {
 int n, k;
    while (cin >> n >> k) {
     vector<int> s(n);
       for (int i = 0; i < n; i++) {
          cin >> s[i];
        }

        int count = 0;
         count_prime_sums(s, k, 0, 0, count);
          cout << count << endl;
    }
    return 0;
}
