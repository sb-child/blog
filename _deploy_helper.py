import sys

dl = []
dr = []

with open('_diff_local.txt') as f:
    dl = f.readlines()

with open('_diff_remote.txt') as f:
    dr = f.readlines()

dl = [i.strip("\n") for i in dl]
dr = [i.strip("\n") for i in dr]

for i in dl:
    try:
        dr.remove(i)
    except ValueError:
        print(f"Warning: {i} is not exist on remote", file=sys.stderr)

print("\n".join(dr))
