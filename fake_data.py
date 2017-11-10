import json
import random

from faker import Faker
from faker.providers import BaseProvider

fake = Faker()


class TitleProvider(BaseProvider):
    def title(self):
        companies = ['Facebook', 'Twitter', 'LinkedIn', 'Google', 'YouTube',
                     'Govt. of India', 'WhatsLoan', 'PaisaBazar', 'DigiLocker',
                     'Trinity Inc.', 'Apple Inc.']
        return random.choice(companies) + ' vs ' + random.choice(companies)


fake.add_provider(TitleProvider)


def random_list(max_val, max_count, exclude_no):
    l = [random.randint(0, max_val)
         for _ in range(random.randint(0, max_count))]
    if exclude_no in l:
        l.remove(exclude_no)
    return l


def generate_case(pk, max_pk):
    obj = {}
    obj['model'] = 'case.Case'
    obj['pk'] = pk

    case = {}
    case['title'] = fake.title()
    case['body'] = fake.text()
    case['judgement_date'] = fake.date()
    case['mentioned_in'] = random_list(
        max_val=max_pk, max_count=20, exclude_no=pk)
    case['mentiones'] = random_list(
        max_val=max_pk, max_count=20, exclude_no=pk)

    obj['fields'] = case
    return obj


def generate_fake_cases(count, file_name):
    cases = [generate_case(pk, count) for pk in range(1, count + 1)]
    with open(file_name, 'w') as fp:
        fp.write(json.dumps(cases))


if __name__ == '__main__':
    generate_fake_cases(50, 'fake_cases.json')
